import BlogCard from '@/components/BlogCard'
import Profile from '@/components/Profile'
import SearchBar from '@/components/SearchBar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'
import  GetBlogs from '../apollo/Blogs/getBlogs.graphql'
import  GetUsers from '../apollo/Users/getUsers.graphql'

function Search() {

	const router = useRouter()
	const [searchParam, setSearchParam] = useState('')
	const [profiles, setProfiles] = useState([])
	const [blogs, setBlogs] = useState([])
	const { keyword } = router.query

	const {
		data:profilesData,
		loading:userLoading
	} = useQuery(GetUsers)

	const {
		data:blogsData,
		loading:blogLoading,error
	} = useQuery(GetBlogs)

	console.log(blogsData?.blogIndex?.edges[0]?.node)
	
	
	useEffect(() => {
		setBlogs(blogsData?.blogIndex.edges.map(item=>item.node))
		setProfiles(profilesData?.userIndex.edges.map(item=>item.node))

		keyword?setSearchParam(keyword):
		setSearchParam('')

	},[userLoading,blogLoading])



	return (
		<div className='flex flex-col items-center   w-screen  select-none pt-20 h-auto overflow-x-hidden mb-20'>
			<SearchBar
				searchParam={searchParam}
				setSearchParam={setSearchParam}
			/>

			<div className='flex justify-center ml-[2%] w-screen'>
				<div className="flex flex-wrap w-[80%] p-5 my-5 gap-20">
					{profiles?.filter(item=>
						(searchParam==''?true:
						item?.name?.toLowerCase().includes(searchParam)||
						item?.blogs?.includes(searchParam)))
						.map((profile, index) => (
						<Profile
							key={index}
							profilePic={profile.imageURL}
							name={profile.name}
							slug={profile.id}
						/>
					))}
				</div>
			</div>

			<div className="lineApp my-10 opacity-50"></div>

			<div className='grid grid-cols-3 gap-10 grid-flow-row-dense pt-[2%] z-20'>
				{blogs?.filter(item=>
					(searchParam==''?true:
					item?.title?.toLowerCase().includes(searchParam)||
					item?.body?.toLowerCase().includes(searchParam)||
					item?.author?.user?.name?.toLowerCase().includes(searchParam)||
					item?.tags?.map(item=>item.name).includes(searchParam)))
				.map((blog, index) => (
					<BlogCard
						key={index}
						title={blog.title}
						content={blog.contentURL}
						slug={blog.id}
					/>
				))}
			</div>
		</div>
	)
}

export default Search
