import { WagmiConfig } from 'wagmi'
import { wagmiClient,ethereumClient,walletConnectProjectId } from '@/wagmi'
import { Web3Modal } from '@web3modal/react'
import {LivepeerConfig, createReactClient,studioProvider} from '@livepeer/react';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import {AuthProvider, composeClient} from '@/context/AuthContext'
import { ApolloProvider } from '@apollo/client'
import { Initalize } from '@/apollo/index'

import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

	const [Apolloclient,setApolloclient]  = useState(Initalize(composeClient))
	const livepeerClient = createReactClient({
		provider: studioProvider({
		  apiKey: 'fc5005e6-0077-4ff3-9e42-ddd5869b6c35',
		}),
	  });

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
						<Footer />
					</LivepeerConfig>
				</AuthProvider>
			</ApolloProvider>
			
			<Web3Modal projectId={walletConnectProjectId} ethereumClient={ethereumClient} />
		</WagmiConfig>
	)
}
