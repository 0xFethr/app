import { WagmiConfig } from 'wagmi'
import { wagmiClient,ethereumClient,walletConnectProjectId } from '@/wagmi'
import { Web3Modal } from '@web3modal/react'

import {LivepeerConfig} from '@livepeer/react';
import { livepeerClient } from '@/config/LivePeer'

import Navbar from '@/components/Navbar'

import {AuthProvider, composeClient} from '@/context/AuthContext'
import { ApolloProvider } from '@apollo/client'
import { Initalize } from '@/apollo/index'

import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

	const [Apolloclient,setApolloclient]  = useState(Initalize(composeClient))
	useEffect(()=>{
		const getApolloClient = async () =>{
			const client = await Initalize(composeClient)
			setApolloclient(client)
		}
		getApolloClient()
	},[composeClient?.did])

	return (
		<WagmiConfig client={wagmiClient}>
			<ApolloProvider client={Apolloclient}>
				<AuthProvider>
					<LivepeerConfig client={livepeerClient}>
							<Navbar />
							<Component {...pageProps} className='scale-[0.80]'/>
					</LivepeerConfig>
				</AuthProvider>
			</ApolloProvider>
			
			<Web3Modal projectId={walletConnectProjectId} ethereumClient={ethereumClient} />
		</WagmiConfig>
	)
}
