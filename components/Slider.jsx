import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { getNFTImage } from '@/config/NFTStorage'


function Slider({ blogs }) {
	const [N, setN] = useState(0)
	const [image, setImage] = useState('')

	useMemo(() => {
		const getContent = async() =>{
			const imageData = await getNFTImage(blogs?.at(N)?.contentURL)
			setImage(imageData)
		}
		getContent()
	},[N])

	return (
		<>
			<div className="select-none	flex flex-col w-[60%] items-center my-10 h-[70vh] relative justify-center">
				{N!=0&&
				<button 
					className=" absolute z-20 left-10" 
					onClick={(e) => {N!=0&&setN(prev=>--prev)}}>
					<Image 
						src={'/back.svg'} 
						alt="back" 
						width={20} 
						height={20}  
					/>
				</button>}

				{N!=4&&
				<button 
					className="absolute z-20 right-10" 
					onClick={(e) => {N!=4&&setN(prev=>++prev)}}>
					<Image 
						src={'/next.svg'} 
						alt="next" 
						width={20} 
						height={20}  
					/>
				</button>}

				<div className="bg-accent rounded-r-3xl glass w-[50%] h-full p-10 z-10 bg-opacity-50 self-end italic font-[100] flex flex-col justify-end items-end text-right">
					<h2 className="bold text-2xl font-[500]">{blogs?.at(N)?.title}</h2>
					<p>{blogs?.at(N)?.body}</p>
				</div>

				<Link 
					href={`/blog/${blogs?.at(N)?.id}`} 
					className='border-2 border-[#ffffff83] w-full h-full rounded-3xl absolute z-0'>
					<Image 
						className='aspect-video w-full h-full object-fill rounded-3xl grayscale ' 
						src={image} 
						alt="Image" 
						width={1000} 
						height={1000} 
					/>
				</Link>

			</div>

			<div className='flex gap-10 select-none '>
				{blogs?.slice(0,5).map((blog, index) => (
					<div
						key={index} 
						className="out tooltip h-[10px]" 
						onClick={() => setN(index)}>
						<div className="tooltiptext">{blogs?.at(N)?.title}</div>
						{N==index?
						<div className='w-[90px] h-[1px] bg-[white] bg-opacity-80'></div>
						:<div className='w-[90px] h-[1px] bg-[white] bg-opacity-40'></div>}
					</div>
				))}
			</div>
		</>
	)
}

export default Slider
