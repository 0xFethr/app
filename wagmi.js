import { 
    EthereumClient, 
    w3mConnectors, 
    w3mProvider 
} from '@web3modal/ethereum'
import { 
    configureChains, 
    createClient,  
    goerli
} from 'wagmi'

export const projectId = 'da9165b35fcee4df2a8c5af806e66463'
export const chains = [goerli]
export const { provider } = configureChains(chains, [w3mProvider({ projectId })])

export const wagmiClient = createClient({
	autoConnect: true,
	connectors: w3mConnectors({ projectId, version: 1, chains }),
	provider
})

export const ethProvider = wagmiClient.getProvider()
export const ethereumClient = new EthereumClient(wagmiClient, chains)
