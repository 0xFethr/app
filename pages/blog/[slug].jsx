import parse from 'html-react-parser';
import Profile from '@/components/Profile'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import  GetBlog from '@/apollo/Blogs/getBlog.graphql'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getNFTImage,getNFTBody } from '@/config/NFTStorage'

function Blog() {
	const router = useRouter()
	const { slug } = router.query;

	const [author,setAuthor] = useState(null)
	const [image,setImage] = useState('')
	const [body,setBody] = useState('')
	const [blog,setBlog] = useState([])
	const [blogs,setBlogs] = useState([])
	const {data,networkStatus} = useQuery(GetBlog,{variables:{id:slug}})

	useEffect(() => {
		setBlog(data?.node)
		setBlogs(data?.node?.author?.user?.account?.blogList?.edges)
		setAuthor(data?.node?.author)

		const getContent = async() =>{
			const imageData = await getNFTImage(data?.node?.contentURL)
			const bodyData = await getNFTBody(data?.node?.contentURL)
			console.log(data?.node?.contentURL)
			setImage(imageData)
			setBody(bodyData)
		}
		getContent()
	},[networkStatus])


	return (
		<div className="flex w-screen justify-around mt-20 pt-20 ">
			<div className="flex flex-col w-[60%] px-20">
				<h1 className="text-4xl w-full">{blog?.title}</h1>
				<div className="flex gap-5 my-2">
					{blog?.tags?.map((tag, index) => (
						<Link 
							key={index} 
							href={`/search?keyword=${tag.name}`}>
							<h2 className="italic text-[100] text-accent">#{tag.name}</h2>
						</Link>
					))}
				</div>

				<Image 
					className='aspect-video w-[100%] h-[50vh] object-fill rounded-3xl grayscale mb-10' 
					src={image} 
					alt="Image" 
					width={500} 
					height={500} 
				/>
				{parse(String(body))}
			</div>

			<div className='h-[90vh]'>
				<div className="lineApp90"></div>
			</div>

			<div className="flex h-[50%] w-[30%] items-center">
				<div className="flex flex-col items-center justify-start gap-5 z-10">
					<Profile
						profilePic={author?.user?.imageURL}
						name={author?.user?.name}
						slug={author?.user?.id}
						authorAddress={author?.user?.address}
						author
					/>

					{blogs?.map((blog, index) => (
						<BlogCard
							key={index}
							className='shrink-10'
							title={blog?.node?.title}
							content={blog?.node?.contentURL}
							slug={blog?.node?.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog
