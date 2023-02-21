import React from 'react'
import { useScroll, useSpring } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {

	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress)

	return (
		<nav className=''>
			<div className=''>
				<div>
					<Image  src={'/logo.svg'}
						width={100}
						height={100}
						alt={'Feather'}/>
				</div>
				<div className="absolute z-0 animate-spin-slow">
					<Image  src={'/orb.svg'}
							width={50}
							height={50}
							alt={'Feather'}/>
				</div>
			</div>


			<div className=''>
				<Link className='' 
					  href={''}>

				</Link>
				<Link className='' 
					  href={''}>

				</Link>
				<Link className='' 
					  href={''}>

				</Link>
				<Link className='' 
					  href={''}>

				</Link>
				<Link className='' 
					  href={''}>

				</Link>
			</div>


			<div className=''>
				<div>
					<Image src={''}
						   width={100}
						   height={100}
						   alt={'Feather'}/>
				</div>
				<div className=''>
					<Image src={''}
						   width={50}
						   height={50}
						   alt={'Feather'}/>
				</div>
			</div>

			<div className=''>
			</div>
		</nav>
	)
}

export default Navbar