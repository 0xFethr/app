import Profile from '@/components/Profile'
import Image from 'next/image'
import React, { useState } from 'react'

function Blog() {
    const [author, setAuthor] = useState({})
    const [blog, setBlog] = useState({})
    const [authorBlogs, setAuthorBlogs] = useState([])
    return (
        <div className="">
            <div className="">
                <h1 className=""></h1>
                <div className="">
                    <p></p>
                </div>

                {/* <Image alt="" src="" fill /> */}

                {/* Block content */}
            </div>

            <div className="">
                <div className=""></div>
                <div className="">
                    <Profile
                        profilePic={author.imageURL}
                        name={author.name}
                        slug={author.slug}
                    />

                    {authorBlogs.map((blog, index) => (
                        <BlogCard
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
