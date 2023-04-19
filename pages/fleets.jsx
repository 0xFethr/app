import Footer from "@/components/Footer"
import Image from "next/image"
import { useQuery } from "@apollo/client"
import { useMemo, useState } from "react"
import GetFleets from "@/apollo/Fleets/getFleets.graphql"
import FleetStrip from "@/components/FleetStrip"
import SearchBar from "@/components/SearchBar"

function Fleets() {
	const [fleets,setFleets] = useState([])
	const [searchParam, setSearchParam] = useState('')

	const {
		data:fleetsData,
		loading:fleetsLoading,
		error
	} = useQuery(GetFleets)
	
	useMemo(()=>{
		setFleets(fleetsData?.fleetIndex.edges.map(item=>item.node))
		console.log(fleetsData)
	},[fleetsLoading])

	return (
		<>
			<div className="mt-[10rem] flex flex-col items-center relative z-10">
				<SearchBar
					searchParam={searchParam}
					setSearchParam={setSearchParam}
				/>

				{fleets?.filter(item=>
					(searchParam==''?true:
					item?.title?.toLowerCase().includes(searchParam)||
					item?.tags?.includes(searchParam)))
					.map((fleet,index)=>(
					<FleetStrip
						key={index}
						content={fleet.contentURL}
						title={fleet.title}
					/>
				))}
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

export default Fleets