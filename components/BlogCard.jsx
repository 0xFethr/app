import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function BlogCard({ title, image, slug }) {
    return (
        <Link className="border-2 border-[#ffffff83] rounded-3xl relative z-0 mx-10  w-[30rem] h-[20rem] inline-block" 
              href={`/Blog/${slug}`}>
            <div className="bg-accent rounded-b-3xl glass w-full h-[30%] p-2 z-10 bg-opacity-50 self-end italic font-[100] flex flex-col justify-end items-end absolute bottom-0 text-right">
                <h2 className="bold text-xl font-[400] w-[90%]">{title}</h2>
            </div>
            <Image 
                className='aspect-video w-full h-full object-fill rounded-3xl grayscale' 
                src={image} 
                alt="Image" 
                width={100} 
                height={100} 
            />
        </Link>
    )
}

export default BlogCard
