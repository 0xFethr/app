import {goerli} from 'wagmi/chains'
import { StreamABI } from './StreamABI'
import { NftABI } from './NftABI'

export const StreamContract = {
	address:'0x8574DDaFD1EaD4219e7B5E83083E59F440424651',
	abi:StreamABI,
	chain: goerli.id
}

export const NFTContract = {
	address:'0x2A9664969907876af19468e89b10F52bd618DE10',
	abi:NftABI,
	chain: goerli.id
}