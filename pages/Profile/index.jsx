import ProfileComponent from '@/components/Profile'
import BlogCard from '@/components/BlogCard'
import fakeBlogs from '@/data/fakeBlogs.json'
import fakeProfiles from '@/data/fakeProfiles.json'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Profile() {
    const [blogs, setBlogs] = useState([])
    const [profiles, setProfiles] = useState([])
    const [user,setUser] = useState({})
    useEffect(() => {
        setBlogs(fakeBlogs)
        setProfiles(fakeProfiles)
        setUser(fakeProfiles[0])
    },[])

    return (
        <div className="flex flex-col items-center pt-20 mt-20 w-screen overflow-x-hidden">
            {user?
            <ProfileComponent
                profilePic={user.imageURL}
                name={user.name}
                slug={user.slug}
                isPremium={user.isPremium}
                user
            />
            :
            <ProfileComponent
                profilePic={user.imageURL}
                name={user.name}
                slug={user.slug}
                isPremium={user.isPremium}
                author
            />}
            <div className='flex overflow-x-auto  w-screen pb-10 my-10'>
                <div className="flex flex-nowrap ml-40 ">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            image={blog.imageURL}
                            slug={blog.slug}
                        />
                    ))}
                </div>
                <div className='bg-[#79797900] border-none h-[40%] w-[35%] glassNoBorder absolute mb-10 right-0 top-[30%]'></div>
            </div>

            <div className="lineApp my-10"></div>

            <div className='flex justify-center ml-[10%] w-screen'>
                <div className="flex flex-wrap w-[80%] p-5 my-10 gap-20 ">
                    {profiles.map((profile, index) => (
                        <ProfileComponent
                            key={index}
                            profilePic={profile.imageURL}
                            name={profile.name}
                            slug={profile.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
