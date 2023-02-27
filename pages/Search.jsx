import BlogCard from '@/components/BlogCard'
import Profile from '@/components/Profile'
import SearchBar from '@/components/SearchBar'
import blogsData from '@/data/fakeBlogs.json'
import profilesData from '@/data/fakeProfiles.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Search() {
    const router = useRouter()
    const { keyword } = router.query;
    const [searchParam, setSearchParam] = useState('')
    const [blogs, setBlogs] = useState([])
    const [profiles, setProfiles] = useState([])
    
    useEffect(() => {
        setBlogs(blogsData)
        setProfiles(profilesData)
        keyword?setSearchParam(keyword):
        setSearchParam('')
    },[])

    return (
        <div className='flex flex-col items-center   w-screen  select-none pt-20 h-auto overflow-x-hidden'>
            {/* <div className='glassBG w-screen h-screen bg-[#8d8d8d21] border-none fixed z-0 top-0'></div> */}
            <SearchBar
                searchParam={searchParam}
                setSearchParam={setSearchParam}
            />

            <div className='flex overflow-x-auto  w-screen pb-10 my-10'>
                <div className="flex flex-nowrap ml-40 ">
                    {blogs.filter(item=>
                        (searchParam==''?true:
                        item?.title?.toLowerCase().includes(searchParam)||
                        item?.body?.toLowerCase().includes(searchParam)||
                        item?.authorID?.toLowerCase().includes(searchParam)||
                        item?.tags?.includes(searchParam)))
                    .map((blog, index) => (
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
                <div className="flex flex-wrap w-[80%] p-5 my-10 gap-20">
                    {profiles.filter(item=>
                        (searchParam==''?true:
                        item?.name?.toLowerCase().includes(searchParam)||
                        item?.blogs?.includes(searchParam)))
                    .map((profile, index) => (
                        <Profile
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

export default Search
