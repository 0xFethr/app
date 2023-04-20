import { useState, useEffect } from 'react'
import { getNFTImage } from '@/config/NFTStorage'
import Image from 'next/image'
import BlogStrip from './BlogStrip'

function TopBlogs({ blogs }) {
	const [selected, setSelected] = useState(0)
	const [image, setImage] = useState('')
	console.log(image)

	useEffect(() => {
		const getContent = async() =>{
			const imageData = await getNFTImage(blogs?.at(selected)?.contentURL)
			setImage(imageData)
		}
		getContent()
	},[blogs,selected])

	return (
		<div className="flex flex-col w-full justify-center items-center -ml-[20%] relative my-20 select-none">
			<div className="w-full flex flex-col gap-5 items-center justify-between z-10">
				{blogs?.slice(0,7).map((blog, index) => (
					<BlogStrip
						key={index}
						id={index}
						slug={blog.id}
						title={blog.title}
						body={blog.body}
						setSelected={setSelected}
					/>
				))}
			</div>

			<div className="w-[30%] absolute z-0 right-10">
				<Image 
					className='grayscale h-[60vh] rounded-xl'
					src={image} 
					alt="image" 
					width={400} 
					height={400} 
				/>
			</div>
		</div>
	)
}

export default TopBlogs
