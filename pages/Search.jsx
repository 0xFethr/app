import BlogCard from '@/components/BlogCard'
import Profile from '@/components/Profile'
import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'

function Search() {
    const [searchParam, setSearchParam] = useState('')
    const [blogs, setBlogs] = useState([])
    const [profiles, setProfiles] = useState([])

    return (
        <div className="">
            <SearchBar
                searchParam={searchParam}
                setSearchParam={setSearchParam}
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

export default Search
