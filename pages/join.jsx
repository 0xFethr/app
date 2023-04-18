import Image from 'next/image'
import Link from 'next/link'

function Join() {
	return (
		<>
			<div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>

				<ul className=' font-Gazapacho italic font-[1000] text-8xl leading-[80%] tracking-widest text-center '>
					<li className='relative z-5'>Latest News</li>
					<li className='relative z-20'>Delivered with</li>
					<li className='relative z-20'>Authenticity</li>
				</ul> 
				
				<div className="absolute z-10 ml-20 mb-20">
					<Image  src={'/logo.svg'}
							width={160}
							height={550}
							className='backdrop '
							alt={'Feather'}/>
				</div>   
				<div className="absolute z-10 ml-10 mb-20">
					<Image  src={'/logo.svg'}
							width={300}
							height={300}
							alt={'Feather'}/>
				</div>      
				<div className="absolute z-0 animate-spin-slow mb-20">
					<Image  src={'/orb.svg'}
							width={200}
							height={200}
							alt={'Feather'}/>
				</div>
				<div className='relative z-20 flex w-[10%] gap-10 text-center mt-20'>
					<Link 
						className="bg-accent p-2 opacity-100 hover:opacity-70 rounded-xl w-[50%] relative z-10" 
						href={'/login'}>
							Login
					</Link>
					<Link 
						className="bg-main p-2 opacity-100 hover:opacity-70 rounded-xl w-[50%] relative z-10" 
						href={'/signup'}>
							Sign Up
					</Link>
				</div>

			</div>
		</>
	)
}

export default Join
