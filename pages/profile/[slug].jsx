import { useRouter } from 'next/router'
import ProfileComponent from '@/components/Profile'
import BlogCard from '@/components/BlogCard'
import { useQuery } from '@apollo/client'
import {useContext, useEffect, useState} from 'react'
import  GetUser from '@/apollo/Users/getUser.graphql'
import { AuthContext } from '@/context/AuthContext'

function Profile() {
	
	const router = useRouter()
	const { slug } = router.query;
	const [profile,setProfile] = useState(null)
	const [id,setId] = useState('')

	const [subscriptions,setSubscriptions] = useState([])
	const [blogs,setBlogs] = useState([])
		
	const {
		data,
		loading,
		error
	} = useQuery(GetUser,{variables:{id:slug}})
	
	console.log(data)
	
	useEffect(() => {
		setProfile(data?.node)
		setSubscriptions(data?.node?.account?.subscriptionList?.edges.map(item=>item.node))
		setBlogs(data?.node?.account?.blogList?.edges.map(item=>item.node))
		setId(localStorage.getItem('userID'))
	},[loading])

	return (
		<div className="flex flex-col items-center pt-20 mt-20 w-screen overflow-x-hidden ">
			{id==slug?
			<ProfileComponent
				profilePic={profile?.imageURL}
				name={profile?.name}
				slug={profile?.slug}
				isPremium={profile?.isPremium}
				user
			/>
			:
			<ProfileComponent
				profilePic={profile?.imageURL}
				name={profile?.name}
				authorAddress={profile?.address}
				slug={profile?.slug}
				isPremium={profile?.isPremium}
				author
			/>}

			<div className='grid grid-cols-3 gap-10 grid-flow-row-dense pt-[2%] z-0'>
				{blogs?.map((blog, index) => (
					<BlogCard
						key={index}
						title={blog.title}
						content={blog.contentURL}
						slug={blog.id}
					/>
				))}
			</div>

			<div className="lineApp my-10"></div>

			<div className='flex justify-center ml-[10%] w-screen'>
				<div className="flex flex-wrap w-[80%] p-5 my-10 gap-20 relative z-10">
					{subscriptions?.map((profile, index) => (
						<ProfileComponent
							key={index}
							profilePic={profile.imageURL}
							name={profile.name}
							slug={profile.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Profile
