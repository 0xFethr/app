import Modal from 'react-modal';
import Image from 'next/image';
import { AuthContext } from '@/context/AuthContext';
import { useState,useContext } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import { StreamContract } from '@/contract';

function StreamBox({ author, isModalOpen, setIsModalOpen }) {

	const [flowRate, setFlowRate] = useState(0);

	const handleSubscription = async () => {
		if(author){
			await createStream?.()
		}
	}

	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: '#5757573b',
			backdropFilter: 'blur(8.4px)',
		},
		content: {
		  top: '55%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  width:'30%',
		  display:'flex',
		  flexDirection:'column',
		  gap:'10px',
		  alignItems: 'center',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		  backgroundColor:'#565656bc',
		  borderRadius:'1.5rem',
		  textAlign: 'center',
		  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
		},
	};
	
	const receiver = author
	const {config:createStreamConfig} = usePrepareContractWrite({
		address: StreamContract.address,
		abi: StreamContract.abi,
		functionName: 'createStream',
		chainId:StreamContract.chain,
		args:[flowRate,receiver],
	})
	const { 
		writeAsync:createStream,
		error,
		data
	}  = useContractWrite(createStreamConfig)

	return (
		<Modal
			isOpen={isModalOpen}
			style={customStyles}
			onRequestClose={()=>setIsModalOpen(false)}
			contentLabel="Stream"
		>
			<h2 className="text-xl font-[500]">Set up token stream with</h2>
			<p className='text-sm'>{author}</p>
			<div className="w-[55%] flex flex-col items-center justify-center relative">
				<input
					className=" relative z-10  italic  bg-[#cccccc57] p-3 rounded-full  glassNoBorder  text-[#e8e8e8c3] placeholder:text-[#dededeb3] "
					value={flowRate}
					placeholder="Flow rate"
					onChange={(e) => setFlowRate(e.target.value)}>
				</input>
			</div>
			<button 
				className="bg-accent rounded-xl p-3" 
				onClick={handleSubscription}>
					Continue
			</button>
		</Modal>
	)
}

export default StreamBox
