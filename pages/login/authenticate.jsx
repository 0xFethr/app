import {useContext, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'
import Link from 'next/link'

function Login() {

	const router = useRouter()
	const {
		authenticate,
	} = useContext(AuthContext)

	return (
		<>
			<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
				<Image
					src={'/ceramic.svg'}
					width={300}
					height={300}
					alt={'Feather'}
				/>
				<p className='font-[400] relative z-10'>
					Authenticate with your
					<span className="text-accent">Ceramic Account</span>
				</p>
				<button 
					className="bg-accent p-2 rounded-xl w-[10%] relative z-10" 
					onClick={()=>{authenticate();router.push('/login/getUser')}}>
						Authenticate
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
