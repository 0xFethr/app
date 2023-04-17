import {useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'


function SignUp() {

	const router = useRouter()
	const {
		address,
		authenticate,
	} = useContext(AuthContext)

	useEffect(() =>{
		if(address){
			router.push('/signup/authenticate')
		}
		router.push('/signup')
	},[address])


	return (
		<>
			<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
				<Image
					src={'/metamask.svg'}
					width={300}
					height={300}
					alt={'Feather'}
				/>
				<p className='font-[400] relative z-10'>
					LogIn with your
					<span className="text-accent">Metamask</span>
				</p>
				<button 
					className="bg-accent p-2 rounded-xl w-[10%] relative z-10" 
					onClick={authenticate}>
						Connect
				</button>
				<div className="absolute z-0 top-[10%] animate splat blur-3xl">
					<Image
						src={'/profileOrb.svg'}
						width={1000}
						height={1000}
						alt={'Feather'}
					/>
				</div>
			</div>
		</>
	)
}

export default SignUp
