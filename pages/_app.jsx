import { WagmiConfig } from 'wagmi'
import { wagmiClient,ethereumClient,walletConnectProjectId } from '@/wagmi'
import { Web3Modal } from '@web3modal/react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import {AuthProvider} from '@/context/AuthContext'
import { ApolloProvider } from '@apollo/client'
import { Apolloclient } from '@/apollo/index'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>

			<ApolloProvider client={Apolloclient}>
				<AuthProvider>
					<Navbar />
						<Component {...pageProps} className='scale-[0.80]'/>
					<Footer />
				</AuthProvider>
			</ApolloProvider>
			
			<Web3Modal projectId={walletConnectProjectId} ethereumClient={ethereumClient} />
		</WagmiConfig>
	)
}
