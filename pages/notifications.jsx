import Footer from "@/components/Footer"
import Image from "next/image"
import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import NotificationStrip from "@/components/NotificationStrip"
import { AuthContext } from "@/context/AuthContext"
import { fetchNotifs } from "@/config/Push" 

function Notifications() {
	const [notifications,setNotifications] = useState([])
	const {address} = useContext(AuthContext)

	useEffect(()=>{
		console.log(notifications)
		const getNotifs = async() =>{
			console.log(address)
			const res = await fetchNotifs(address)
			setNotifications(res)
		}
		if(address)
			getNotifs()	
	},[address])

	return (
		<>
			<div className="mt-[10rem] min-h-screen flex flex-col items-center justify-center text-center relative z-10">
				{notifications?.map((notif,index)=>(
					<NotificationStrip
						key={index}
						content={notif?.message}
						title={notif?.title}
					/>
				))}
				<p className="font-Gazapacho italic font-[800] text-5xl">{notifications.length == 0&&"No Notifications"}</p>
				<p className="font-Gazapacho italic font-[800] text-5xl">{!address&&"Please connect wallet"}</p>
			</div>
			<div className='w-screen h-screen bg-[#8d8d8d21] border-none fixed z-0 top-0'>
				<div className="fixed z-0 -bottom-20 right-0 ">
					<Image
						className='blur-3xl opacity-50'
						src={'/purpleOrb.svg'}
						width={500}
						height={500}
						alt={'Feather'}
					/>
				</div>
				<div className="fixed z-0 -top-10 -left-20">
						<Image  
							className='blur-3xl opacity-50'
							src={'/orangeOrb.svg'}
							width={500}
							height={500}
							alt={'Feather'}
						/>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default Notifications