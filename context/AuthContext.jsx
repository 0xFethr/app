import { createContext, useEffect, useState } from "react"
import { useWeb3Modal } from "@web3modal/react"
import { goerli,useAccount,useSignMessage } from "wagmi"
import { ethProvider } from "@/wagmi"
import { uploadUserImage } from "@/config/NFTStorage"

import { ComposeClient }from '@composedb/client'
import { DIDSession } from "did-session"
import { EthereumWebAuth,getAccountId } from '@/util/authMethod'
import { definition } from "@/schema/client"

import { useMutation,useQuery } from '@apollo/client'
import  AddUser from '../apollo/Users/addUser.graphql'
import  GetUser from '../apollo/Users/getUser.graphql'


export const AuthContext = createContext()
export const composeClient = new ComposeClient({ceramic:'http://localhost:7007', definition})

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

	const checkSession = async () => {
		if(session?.isExpired||!session||!session?.isAuthenticated) {		
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
		}
	}

	const authenticate = async () => {
		setDefaultChain(goerli)
		await open()
		await checkSession()
	}

	const logIn = async (id) => {
		const res = getUser({id})
		localStorage.setItem('user',userData)
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
	}

	useEffect(()=>{
		checkSession()
		setSession(localStorage.getItem("didsession"))
		setUser(localStorage.getItem("user"))
		setProfileImage(localStorage.getItem("profileimage"))
	},[])


	const {open, setDefaultChain } = useWeb3Modal()
	const {address } = useAccount()
	const {signMessageAsync} = useSignMessage() 

	const [addComposeUser, { data:addUserData }] = useMutation(AddUser);
	const {refetch:getUser,error:getUserError, data:userData} = useQuery(GetUser)

	const [session,setSession] = useState(null)
	const [user,setUser] = useState(null)
	const [profileImage,setProfileImage] = useState(null)

	return (
		<AuthContext.Provider value={{
			address,
			session,
			user,

			addUser,
			authenticate,
			logIn,

			profileImage,
			setProfileImage,
		}}>
			{children}
		</AuthContext.Provider>
	)
}