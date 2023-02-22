import React, { useState } from 'react'
import BlogStrip from './BlogStrip'

function TopBlogs({ blogs }) {
    const [selected, setSelected] = useState(0)
    return (
        <div className="">
            <div className="">
                {blogs.map((blog, index) => (
                    <BlogStrip
                        key={index}
                        slug={blog.slug}
                        title={blog.title}
                        body={blog.body}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <div className="">
                <Image src={''} alt="" fill />
            </div>
        </div>
    )
}

export default TopBlogs
