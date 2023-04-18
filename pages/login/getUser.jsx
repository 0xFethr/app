import {useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'
import Link from 'next/link'

function Login() {

	const router = useRouter()
	const [isUserLoading, setIsUserLoading] = useState(false)
	const [id, setId] = useState('')

	const {
		user,
		logIn,
	} = useContext(AuthContext)


	const handleLogIn = async() => {
		setIsUserLoading(true)

		if(id){
			const {userData,getUserError} = await logIn(id)
			setIsUserLoading(user&&false)

			if(userData)
				router.push(`/profile/${id}`)
		}
	}

	useEffect(() =>{
		console.log(user)
	},[user])


	return (
		<>
			<div className='w-screen h-screen flex flex-col gap-10 justify-center items-center py-20 mt-20 overflow-hidden select-none z-20 relative'>
				<Image
					src={'/logo.svg'}
					width={300}
					height={300}
					alt={'Feather'}
				/>
				<div className="absolute z-0 top-[10%] animate splat blur-3xl">
					<Image
						src={'/profileOrb.svg'}
						width={1000}
						height={1000}
						alt={'Feather'}
					/>
				</div>
				{isUserLoading&&<Loader/>}
				<div className="w-[40%] flex flex-col items-center justify-center relative">
					<input
						className=" relative z-10  italic  bg-[#cccccc2a] p-3 rounded-xl w-[80%] glassNoBorder  text-[#cccccc7a] placeholder:text-[#cccccc7a] "
						value={id}
						placeholder="Enter your UID"
						onChange={(e) => setId(e.target.value)}>
					</input>

					
					<div className='flex gap-10 underline mt-5 opacity-30 '>
						<Link
							className='hover:opacity-50' 
							href={'/signup'}>
							New User?
						</Link>
						<Link 
							className='hover:opacity-50'
							href={'mailto:Vshon447@gmail.com'}>
							Forgot UID?
						</Link>
					</div>

					<div
						className="absolute right-[15%] z-10 cursor-pointer top-5"
						onClick={handleLogIn}
					>
						<Image 
							src={'/tickName.svg'} 
							width={20} 
							height={20} 
							alt={'Feather'} 
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
