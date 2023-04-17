import { usePrepareContractWrite, useContractWrite} from 'wagmi'
import {goerli} from 'wagmi/chains'
import { StreamABI } from './StreamABI'
import { NftABI } from './NftABI'

export const StreamContract = async (contractAddress='0x2A9664969907876af19468e89b10F52bd618DE10') =>{
	const createFlowToAddress = async (reciever,token,flowRate) => {
		const {config,error} = usePrepareContractWrite({
			address: contractAddress,
			abi: StreamABI,
			functionName: 'createFlowToAddress',
			chainId:goerli.id,
			args:[reciever,token,flowRate],
		})
		const contractConfig  = useContractWrite(config)

		return {
			error,
			contractConfig
		}
	}
	
	const deleteFlowFromContract = async (reciever,token) => {
		const {config,error} = usePrepareContractWrite({
			address: contractAddress,
			abi: StreamABI,
			functionName: 'deleteFlowFromContract',
			chainId:goerli.id,
			args:[reciever,token],
		})
		const contractConfig  = useContractWrite(config)

		return {
			error,
			contractConfig
		}
	}
	
	return {
		createFlowToAddress,
		deleteFlowFromContract,
	}
}

export const NFTContract = async (contractAddress='0x794517c363cff4d9b442112f7B01bB9827A07ABD') =>{

	const createBlog = async (_title,_image,_owner) => {
		const {config,error} = usePrepareContractWrite({
			address: contractAddress,
			abi: NftABI,
			functionName: 'createBlog',
			chainId:goerli.id,
			args:[_title,_image,_owner],
		})
		const contractConfig  = useContractWrite(config)

		return {
			error,
			contractConfig
		}
	}

	const getNFT = async (index) => {
		const {config,error} = usePrepareContractWrite({
			address: contractAddress,
			abi: NftABI,
			functionName: 'getNFT',
			chainId:goerli.id,
			args:[index],
		})
		const contractConfig  = useContractWrite(config)

		return {
			error,
			contractConfig
		}
	}

	return {
		createBlog,
		getNFT
	}
}