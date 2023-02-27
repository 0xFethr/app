import Profile from '@/components/Profile'
import SanityBlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import fakeBlogs from '@/data/fakeBlogs.json'
import fakeProfiles from '@/data/fakeProfiles.json'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Blog() {
    // const [author, setAuthor] = useState()
    // const [blog, setBlog] = useState()
    // const [authorBlogs, setAuthorBlogs] = useState()
    // const [loading, isLoading] = useState(true)

    const router = useRouter()
    const { slug } = router.query;

    const fakeBlog = fakeBlogs.find(blog => blog?.slug==slug)
    const fakeProfile =  fakeProfiles.find(profile=>profile?.slug==fakeBlog?.authorID)
    const fakeAuthorBlog = fakeBlogs.filter(blog => blog?.authorID==fakeProfile?.slug)
    console.log(fakeBlog)




    return (
        <div className="flex w-screen justify-around mt-20 pt-20 ">
            <div className="flex flex-col w-[60%] px-20">
                <h1 className="text-4xl w-full">{fakeBlog?.title}</h1>
                <div className="flex gap-5 my-2">
                    {fakeBlog?.tags?.map((tag, index) => (
                        <Link 
                            key={index} 
                            href={`/Search?keyword=${tag}`}>
                            <h2 className="italic text-[100] text-accent">{tag}</h2>
                        </Link>
                    ))}
                </div>

                <Image 
                    className='aspect-video w-[100%] h-[50vh] object-fill rounded-3xl grayscale ' 
                    src={fakeBlog?.imageURL} 
                    alt="Image" 
                    width={500} 
                    height={500} 
                />

                {/* <SanityBlockContent
                    blocks={fakeBlog?.body}
                /> */}
                <p className='my-10'>{fakeBlog?.body}</p>
            </div>

            <div className='h-[90vh]'>
                <div className="lineApp90"></div>
            </div>

            <div className="flex w-[30%] items-center">
                <div className="flex flex-col items-center gap-5  z-10">
                    <Profile
                        profilePic={fakeProfile?.imageURL}
                        name={fakeProfile?.name}
                        slug={fakeProfile?.slug}
                        author
                    />

                    {fakeAuthorBlog?.map((blog, index) => (
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
