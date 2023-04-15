import { createContext, useEffect, useState } from "react"
import { useWeb3Modal } from "@web3modal/react"
import { goerli,useAccount,useSignMessage } from "wagmi"
import { uploadUserImage } from "@/config/NFTStorage"

import { ComposeClient }from '@composedb/client'
import { DIDSession } from "did-session"
import { EthereumWebAuth,getAccountId } from '@/util/authMethod'
import { definition } from "@/schema/client"

import { ethProvider } from "@/wagmi"

import { useMutation,useQuery } from '@apollo/client'
import  AddUser from '../apollo/Users/addUser.graphql'
import  GetUser from '../apollo/Users/getUser.graphql'


export const AuthContext = createContext()
export const composeClient = new ComposeClient({ceramic:'http://localhost:7007',definition})

export function AuthProvider({children}) {


	const loadSession = async (authMethod) => {
		const sessionStr = localStorage.getItem('didsession')
		let session
		if (sessionStr) {
			session = await DIDSession.fromSession(sessionStr)
		}
		if (!sessionStr || (session.hasSession && session.isExpired)) {
			session = await DIDSession.authorize(authMethod, {
				resources: composeClient.resources,
			})
			localStorage.setItem('didsession', session.serialize())
		}
		return session
	}

	const addSession = async () => {
		if(session?.isExpired||!session){		
			const accountId = await getAccountId(ethProvider,address)
			const authMethod = await EthereumWebAuth.getAuthMethod(
				ethProvider,
				accountId,
				signMessageAsync
			)
			const session = await loadSession(authMethod)
			localStorage.setItem('user',address)
			localStorage.setItem('didsession', session.serialize())
			composeClient.setDID(session.did)
			setSession(session)
			setIsLoggedIn(session&&true)
		}
	}

	const logInUser = async () => {
		setDefaultChain(goerli)
		await open()
		await addSession()

		//get the user and if not present add user
	}

	const logOutUser = async () => {
		if (address) {
			localStorage.removeItem("user")
			localStorage.removeItem("didsession")
		}
	}

	const addUser = async (name,image) => {
		const imageURL = await uploadUserImage(image,name)
		const username = name 
		const isPremium = false
		const tokens = 0.0

		await addComposeUser({
			variables: { 
				username, 
				address,
				imageURL,
				isPremium, 
				tokens,
			}
		})

		console.log(addUserData,addUserError)
		if(!addUserError)
			return addUserData
		
		return addUserError
	}

	useEffect(()=>{
		addSession()
		setSession(localStorage.getItem("didsession"))
		setProfileImage(localStorage.getItem("profileimage"))
		getUser({id:session?.id})
	},[])


	const {open, setDefaultChain } = useWeb3Modal()
	const {address,isConnected } = useAccount()
	const {signMessageAsync} = useSignMessage() 

	const [addComposeUser, { data:addUserData, error:addUserError }] = useMutation(AddUser);
	const {data:user,refetch:getUser,error:getUserError} = useQuery(GetUser)

	const [session,setSession] = useState(null)
	const [isLoggedIn,setIsLoggedIn] = useState(isConnected&&session)
	const [profileImage,setProfileImage] = useState('')

	console.log(session?.did)
	console.log(session)
	console.log(session?.id)

	return (
		<AuthContext.Provider value={{
			address,
			isConnected,
			user,
			addUser,
			isLoggedIn,
			logInUser,
			logOutUser,
			profileImage,
			setProfileImage,
			session,
		}}>
			{children}
		</AuthContext.Provider>
	)
}