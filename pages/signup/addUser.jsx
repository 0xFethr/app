import {useState, useContext, useEffect } from 'react'
import ImageUploader from '@/components/ImageUploader'
import Image from 'next/image'
import camera from '@/public/camera.svg'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'
import { getNFTData } from '@/config/NFTStorage'

function SignUp() {
	const [image, setImage] = useState(camera)
	const [name, setName] = useState('')
	const [id, setId] = useState('')
	const [isUploading, setIsUploading] = useState(false)
	
	const {
		addUser,
		user,
		setProfileImage,
	} = useContext(AuthContext)

	const AddUser = async () =>{
		setIsUploading(true)
		await addUser(name,image)

		if(user){
			setIsUploading(false)
			setProfileImage(image)
            setId(user)
			localStorage.setItem('profileimage',image)
		}
	}

	return (
		<>
			<div className='w-screen h-screen flex flex-col gap-10 justify-center items-center select-none z-20 relative'>
				<div className="absolute z-0 top-[10%] animate splat blur-3xl">
					<Image
						src={'/profileOrb.svg'}
						width={900}
						height={900}
						alt={'Feather'}
					/>
				</div>
				<ImageUploader 
					image={image}
					setImage={setImage}
				/>
				<div className="w-[25%] flex flex-col items-center justify-center relative">
					<input
						className="relative z-10  italic  bg-[#cccccc2a] p-3 rounded-xl w-[80%] glassNoBorder  text-[#cccccc7a] placeholder:text-[#cccccc7a] "
						value={name}
						placeholder="Username"
						onChange={(e) => setName(e.target.value)}>
					</input>
					<div
						className="absolute right-[15%] z-10 cursor-pointer"
						onClick={AddUser}
					>
						<Image 
							src={'/tickName.svg'} 
							width={20} 
							height={20} 
							alt={'Feather'} 
						/>
					</div>
				</div>

				{id&&<p 
					className='underline opacity-30 hover:opacity-50 cursor-pointer'
					onClick={() => {navigator.clipboard.writeText(id)}}
					>
					UID: {id}
				</p>}
				{isUploading&&<Loader/>}
				{id&&<p className='opacity-30'>Please copy and store your UID</p>}
			</div>
		</>
	)
}

export default SignUp
