import Profile from '@/components/Profile'
import React, { useState } from 'react'

function Profile() {
    const [blogs, setBlogs] = useState([])
    const [profiles, setProfiles] = useState([])

    return (
        <div className="">
            user?
            <Profile
                profilePic={author.imageURL}
                name={author.name}
                slug={author.slug}
                isPremium={author.isPremium}
                user
            />
            :
            <Profile
                profilePic={author.imageURL}
                name={author.name}
                slug={author.slug}
                isPremium={author.isPremium}
                author
            />
            <div className="">
                {blogs.map((blog, index) => (
                    <BlogCard
                        title={blog.title}
                        author={blog.author}
                        image={blog.imageURL}
                        slug={blog.slug}
                    />
                ))}
            </div>
            <div className=""></div>
            <div className="">
                {profiles.map((profile, index) => (
                    <Profile
                        profilePic={profile.imageURL}
                        name={profile.name}
                        slug={profile.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default Profile
