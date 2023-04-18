import Modal from 'react-modal';
import Image from 'next/image';
import { StreamContract } from '@/contract';
import { AuthContext } from '@/context/AuthContext';
import { useState,useContext } from 'react'

function StreamBox({ author, isModalOpen, setIsModalOpen }) {

    const {address} = useContext(AuthContext)

    const handleSubscription = async () => {

    }

    const handleRejection = async () => {
        
    }

    const [amount, setAmount] = useState(0);
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

    return (
        <Modal
            isOpen={isModalOpen}
            style={customStyles}
            onRequestClose={()=>setIsModalOpen(false)}
            contentLabel="Stream"
        >
            <h2 className="text-xl font-[500]">Set up token tream with</h2>
            <p>{author}</p>
            <div className="w-[55%] flex flex-col items-center justify-center relative">
                <input
                    className=" relative z-10  italic  bg-[#cccccc57] p-3 rounded-full  glassNoBorder  text-[#e8e8e8c3] placeholder:text-[#dededeb3] "
                    value={amount}
                    placeholder="Username"
                    onChange={(e) => setAmount(e.target.value)}>
                </input>
                <a
                    className="absolute -right-10 z-10 "
                    href={'/profile'}>
                    <Image 
                        src={'/tickName.svg'} 
                        width={20} 
                        height={20} 
                        alt={'Feather'} 
                    />
                </a>
            </div>
            <button 
                className="bg-accent rounded-xl p-3" 
                onClick={(e) => setIsModalOpen(false)}>
                    Continue
            </button>
        </Modal>
    )
}

export default StreamBox
