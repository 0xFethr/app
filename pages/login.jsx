import {useState, useContext, useEffect } from 'react'
import ImageUploader from '@/components/ImageUploader'
import Image from 'next/image'
import camera from '@/public/camera.svg'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'

function Login() {

	const router = useRouter()
	const [image, setImage] = useState(camera)
	const [name, setName] = useState('')
	const [isUserConnected, setIsUserConnected] = useState(false)
	const [isUploading, setIsUploading] = useState(false)
	
	const {
		address,
		user,
		logInUser,
		addUser,
		isConnected,
		isLoggedIn,
		setProfileImage,
	} = useContext(AuthContext)

	useEffect(() =>{
		setIsUserConnected(isConnected&&address)
	},[isConnected])


	const handleImageUpload = async () =>{
		setIsUploading(true)
		const metadataURL = await addUser(name,image)

		if(metadataURL){
			setIsUploading(false)
			setProfileImage(metadataURL)
			localStorage.setItem('profileimage',metadataURL)
		}
	}


	

	return (
		<>
			{!isLoggedIn && (<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
					<Image
						src={!isUserConnected?'/metamask.svg':'/ceramic.svg'}
						width={300}
						height={300}
						alt={'Feather'}
					/>
					<p className='font-[400] relative z-10'>
						
						Log in with your
						<span className="text-accent"> {!isUserConnected?'Metamask':'Ceramic Account'}</span>
						
					</p>
					<button 
						className="bg-accent p-2 rounded-xl w-[10%] relative z-10" 
						onClick={logInUser}>
							{!isUserConnected?'Connect':'Approve Ceramic'}
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
			)}

			{isLoggedIn && (
				<div className='w-screen h-screen flex flex-col gap-10 justify-center items-center py-20 mt-20 overflow-hidden select-none z-20 relative'>
					<div className="absolute z-0 top-[10%] animate splat blur-3xl">
						<Image
							src={'/profileOrb.svg'}
							width={1000}
							height={1000}
							alt={'Feather'}
						/>
					</div>
					<ImageUploader 
						image={image}
						setImage={setImage}
					/>
					<div className="w-[35%] flex flex-col items-center justify-center relative">
						<input
							className=" relative z-10  italic  bg-[#cccccc2a] p-3 rounded-xl w-[80%] glassNoBorder  text-[#cccccc7a] placeholder:text-[#cccccc7a] "
							value={name}
							placeholder="Username"
							onChange={(e) => setName(e.target.value)}>
						</input>
						<div
							className="absolute right-[15%] z-10 cursor-pointer"
							onClick={handleImageUpload}
						>
							<Image 
								src={'/tickName.svg'} 
								width={20} 
								height={20} 
								alt={'Feather'} 
							/>
						</div>
					</div>
					{isUploading&&<Loader/>}
				</div>
			)}
		</>
	)
}

export default Login
