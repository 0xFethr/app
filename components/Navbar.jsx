import React, { useState, useEffect, useContext } from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { AuthContext } from '@/context/AuthContext'
import { getProfileImage } from '@/config/NFTStorage'

function Navbar() {

	const { scrollYProgress } = useScroll()
	const router = useRouter()
	const scaleX = useSpring(scrollYProgress)
	const [id,setId] = useState('')
	const [image,setImage] = useState(null)
	const {user,session,address} = useContext(AuthContext)
	const [route,setRoute] = useState(router.asPath)

	useEffect(()=>{
		var account
		try{
			if(user)
			account = JSON.parse(user)
		}
		catch(error){
			console.log(error)
		}
		
		console.log(account)
		const getImage = async() =>{
			const data = await getProfileImage(account?.node?.imageURL,account?.node?.name)
			setImage(data)
		}
		getImage()
	},[user])

	useEffect(() => {
		setRoute(router.asPath)
		const uid = localStorage.getItem('userID')
		setId(uid)
	  }, [router.asPath]);

	return (
		<div className='w-full flex justify-center relative'>
			<nav className="flex w-[90%] rounded-2xl items-center justify-between fixed top-0 italic font-[100] text-[#ffffff92] px-10 glass mt-2 z-50 bg-[#cccccc1e] overflow-x-hidden">
			
				<Link 
					href={'/'} 
					className="flex flex-col">
					<div>
						<Image
							src={'/logo.svg'}
							width={50}
							height={100}
							alt={'Feather'}
						/>
					</div>
					{route=='/'?
					<div className="absolute z-0 animate-spin-slow -top-1 left-6">
						<Image
							className='animate splat delay-1'
							src={'/orb.svg'}
							width={70}
							height={70}
							alt={'Feather'}
						/>
					</div>:
					<div className="absolute z-0 animate-spin-slow">
						<Image
							src={'/orb.svg'}
							width={50}
							height={50}
							alt={'Feather'}
						/>
					</div>}
				</Link>


				<div className=" flex gap-10">
					<Link className="hover:text-[white] hover:font-[400]" href={'/publish'}>publish</Link>
					<Link className="hover:text-[white] hover:font-[400]" href={'/warden'}>my warden</Link>
					<Link className="hover:text-[white] hover:font-[400]" href={'/search'}>explore</Link>
					<Link className="hover:text-[white] hover:font-[400]" href={'/fleets'}>fleets</Link>
					<Link className="hover:text-[white] hover:font-[400]" href={'/notifications'}>notifications</Link>
					<Link className="hover:text-[white] hover:font-[400]" href={'https://fethfaucet.netlify.app/'}>faucet</Link>
				</div>


				<Link href={(!session?.isExpired&&id&&address)?`/profile/${id}`:'/join'} className=" flex flex-col relative">
					<div className=''>
						{image?
						<Image 
							className='rounded-full'
							src={image} 
							width={50} 
							height={100} 
							alt={'Feather'} 
						/>:
						<Image 
							className='rounded-full'
							src={'/user.png'} 
							width={50} 
							height={100} 
							alt={'Feather'} 
						/>}
					</div>
				</Link>

				{route=='/Login'&&
				<div className="absolute z-0 -right-10 animate splat delay-1">
					<Image 
						src={'/purpleOrb.svg'} 
						width={150} 
						height={100} 
						alt={'Feather'} 
					/>
				</div>}
				{route.includes('/blog')&&
				<motion.div 
					style={{scaleX}}
					className="fixed -z-20 opacity-80 blur-sm rounded-full gradient right-0 origin-left h-[2rem] -bottom-2 left-2">
				</motion.div>}
			</nav>
		</div>
	)
}

export default Navbar
