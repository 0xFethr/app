import React from 'react'
import Image from 'next/image'
function BlogCard({ title, author, image, slug }) {
    return (
        <a className="" href="">
            <div className="">
                <Image alt="" src="" fill />
            </div>

            <div className="">
                <h2 className=""></h2>
                <p className=""></p>
            </div>
        </a>
    )
}

export default BlogCard
