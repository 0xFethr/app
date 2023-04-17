import parse from 'html-react-parser';
import Profile from '@/components/Profile'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import {useEffect, useState} from 'react'
import  GetBlog from '../apollo/Blogs/getBlog.graphql'
import Link from 'next/link'

function Blog() {
    const router = useRouter()
	const { slug } = router.query;

	const [author,setAuthor] = useState(null)
	const [blog,setBlog] = useState([])
	const [blogs,setBlogs] = useState([])

	const {
		data,
		loading
	} = useQuery(GetBlog,{variables:{id:slug}})

	
	useEffect(() => {
		setAuthor()
		setBlogs()
		setBlog(data?.node)
	},[loading])

    return (
        <div className="flex w-screen justify-around mt-20 pt-20 ">
            <div className="flex flex-col w-[60%] px-20">
                <h1 className="text-4xl w-full">{blog?.title}</h1>
                <div className="flex gap-5 my-2">
                    {blog?.tags?.map((tag, index) => (
                        <Link 
                            key={index} 
                            href={`/search?keyword=${tag}`}>
                            <h2 className="italic text-[100] text-accent">{tag}</h2>
                        </Link>
                    ))}
                </div>

                <Image 
                    className='aspect-video w-[100%] h-[50vh] object-fill rounded-3xl grayscale ' 
                    src={blog?.imageURL} 
                    alt="Image" 
                    width={500} 
                    height={500} 
                />

                <p className='my-10'>{blog?.body}</p>
            </div>

            <div className='h-[90vh]'>
                <div className="lineApp90"></div>
            </div>

            <div className="flex w-[30%] items-center">
                <div className="flex flex-col items-center gap-5  z-10">
                    <Profile
                        profilePic={author?.imageURL}
                        name={author?.name}
                        slug={author?.slug}
                        author
                    />

                    {blogs?.map((blog, index) => (
                        <BlogCard
                            key={index}
                            className='shrink-10'
                            title={blog.title}
                            author={blog.author}
                            image={blog.imageURL}
                            slug={blog.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
