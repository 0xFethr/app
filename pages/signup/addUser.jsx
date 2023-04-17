import {useState, useContext, useEffect } from 'react'
import ImageUploader from '@/components/ImageUploader'
import Image from 'next/image'
import camera from '@/public/camera.svg'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import Loader from '@/components/Loader'

function SignUp() {

	const router = useRouter()
	const [image, setImage] = useState(camera)
	const [name, setName] = useState('')
	const [id, setId] = useState('')
	const [isUploading, setIsUploading] = useState(false)
	
	const {
		addUser,
		setProfileImage,
	} = useContext(AuthContext)

	const AddUser = async () =>{
		setIsUploading(true)
		const {accountID,imageURL} = await addUser(name,image)

		if(accountID){
			setIsUploading(false)
			setProfileImage(imageURL)
            setId(accountID)
			localStorage.setItem('profileimage',imageURL)
		}
	}

	return (
		<>
			{!isLoggedIn&&(
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

                    <p 
                        className='underline opacity-30 hover:opacity-50 cursor-pointer mt-5'
                        onClick={() => {navigator.clipboard.writeText(id)}}
                        >
                        UID: {id}
                    </p>
					{isUploading&&<Loader/>}
					{id&&<p className='opacity-30 mt-2'>Please copy and store your UID</p>}
				</div>
			)}
		</>
	)
}

export default SignUp
