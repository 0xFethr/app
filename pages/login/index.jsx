import {useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'
import Link from 'next/link'

function Login() {

	const router = useRouter()
	const {
		session,
		address,
		authenticate,
	} = useContext(AuthContext)

	useEffect(() =>{
		if(address&&!session.isExpired){
			router.push('/login/getUser')
		}
		if(address){
			router.push('/login/authenticate')
		}
	},[address,session?.isExpired])


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

export default Login
