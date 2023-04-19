import { useMemo, useState } from 'react'
import StreamBox from './StreamBox'
import Image from 'next/image'
import Link from 'next/link'
import { getProfileImage } from '@/config/NFTStorage'
import { optIn, optOut } from '@/config/Push'
import { useConnect } from 'wagmi'
import { AuthContext } from '@/context/AuthContext'
import { LiveStream } from './LiveStream'

function Profile({ profilePic, name, slug, isPremium, user, author, isSubscribed, channelAddress }) {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [image,setImage] = useState(null)
	const {address,signer} = useConnect(AuthContext)

	useMemo(()=>{
		const getImage = async() =>{
			const data = await getProfileImage(profilePic,name)
			setImage(data)
		}
		getImage()
	},[profilePic])

	const handleNotification = async () => {
		if(isSubscribed)
			await optIn(address,channelAddress,signer)
		await optOut(address,channelAddress,signer)
	}

	return (
		<>
			{author && (
				<>
					<div className="absolute z-0 top-0 blur-xl animate splat">
						<Image
							src={'/profileOrb.svg'}
							width={500}
							height={500}
							alt={'Feather'}
						/>
					</div>
					<Link 
						href={`/profile/${slug}`}
						className="relative z-10 flex felx-col justify-center h-auto w-auto ">
						<Image 
							className='rounded-full border-2 border-[white]'
							src={image?image:''} 
							width={150} 
							height={150} 
							alt={'Feather'} 
						/>
					</Link>
					<div className="flex gap-2 items-center relative z-10">
						{isPremium&&
						<Image 
							src={'/tick.svg'} 
							width={20} 
							height={20} 
							alt={'Feather'} 
						/>}
						<h2 className=' font-Gazapacho italic font-[1000] text-3xl opacity-80'>{name}</h2>
					</div>
					<StreamBox
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
						author={name}
					/>
					<div className="flex flex-row-reverse gap-2 relative z-10">
						{isSubscribed?<button 
							className=" hover:opacity-50 p-1 rounded-xl my-2" 
							onClick={handleNotification}>
							<Image 
								src={'/bell-tick.svg'} 
								width={30} 
								height={30} 
								alt={'Feather'} 
							/>
						</button>:
						<button 
							className=" hover:opacity-50 p-1 rounded-xl my-2" 
							onClick={handleNotification}>
							<Image 
								src={'/bell.svg'} 
								width={30} 
								height={30} 
								alt={'Feather'} 
							/>
						</button>}
						<button 
							className="bg-[#B68D2E] hover:bg-[#846620] p-1 rounded-xl my-2" 
							onClick={(e) => setIsModalOpen(true)}>
							Donate
						</button>
					</div>
				</>
			)}

			{user && (
				<>
					<div className="absolute z-0 top-0 blur-xl animate splat">
						<Image
							src={'/profileOrb.svg'}
							width={500}
							height={500}
							alt={'Feather'}
						/>
					</div>
					<LiveStream setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
					<div className="relative">
						<Image 
							className='rounded-full border-2 border-[white]'
							src={image?image:''} 
							width={150} 
							height={150} 
							alt={'Feather'} 
						/>
						{!isModalOpen&&
						<button
							onClick={()=>setIsModalOpen(prev=>!prev)} 
							className='absolute bottom-0 right-0 hover:opacity-80 z-20'>
							<Image 
								src={'/vid.svg'} 
								width={50} 
								height={50} 
								alt={'Feather'} 
							/>
						</button>}
					</div>
					<div className="flex gap-2 items-center">
						{isPremium&&<Image 
							src={'/tick.svg'} 
							width={20} 
							height={20} 
							alt={'Feather'} 
						/>}
						<h2 className=' font-Gazapacho italic font-[1000] text-3xl opacity-80'>{name}</h2>
					</div>
				</>
			)}

			{!user&&!author && (
				<>
					<a className="relative flex felx-col justify-center h-auto w-auto" href={`/profile/${slug}`}>
						<p className="absolute bottom-10 z-10 font-[800]">{name}</p>
						<div className='absolute glassNoBorder bg-[#83838356] rounded-b-full bottom-0 h-[50%] w-full'></div>
						<Image 
							className='rounded-full border-2 border-[white]'
							src={image?image:''} 
							width={150} 
							height={150} 
							alt={'Feather'} 
						/>
					</a>
				</>
			)}
		</>
	)
}

export default Profile
