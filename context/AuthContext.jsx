import { createContext, useEffect, useState } from "react"
import { useWeb3Modal } from "@web3modal/react"
import { goerli,useAccount } from "wagmi"
import { EthereumWebAuth,getAccountId } from '@/util/authMethod'
import { ComposeClient }from '@composedb/client'
import { DIDSession } from "did-session"
import { definition } from "@/schema/client"
import { ethProvider } from "@/wagmi"
import { useSignMessage } from 'wagmi'

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

	const logInUser = async () => {
		setDefaultChain(goerli)
		await open()
		if(ethProvider&&address){			
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

	const logOutUser = async () => {
		if (address) {
            setUser(null)
            localStorage.removeItem("user")
            localStorage.removeItem("didsession")
        }
	}

	const addUser = async () => {

	}

	const getUser = async () => {

	}

	const {address,isConnected } = useAccount()
	const {open, setDefaultChain, close } = useWeb3Modal()

	useEffect(()=>{

	},[])

	const [session,setSession] = useState(null)
	const [user,setUser] = useState(null)
	const [isLoggedIn,setIsLoggedIn] = useState(isConnected&&session)
	const {signMessageAsync} = useSignMessage() 
	console.log(session?.did)
	return (
		<AuthContext.Provider value={{
			address,
			user,
			isLoggedIn,
			logInUser,
			logOutUser,
			session,
		}}>
			{children}
		</AuthContext.Provider>
	)
}