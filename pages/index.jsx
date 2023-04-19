import Head from 'next/head'
import Quote from '@/components/Quote'
import Slider from '@/components/Slider'
import TopBlogs from '@/components/TopBlogs'
import Image from 'next/image'
import{ useMemo, useState } from 'react'
import axios from 'axios'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import { useQuery } from '@apollo/client'
import  GetBlogs from '../apollo/Blogs/getBlogs.graphql'


export async function getStaticProps() {
	const res = await axios.get('https://type.fit/api/quotes')
	const data =  res.data[Math.floor(Math.random() * 1642)]
	return{
		props:{
			quote: data.text,
			author: data.author,   
		}
	}
}

export default function Index({quote,author}) {
	const [searchParams, setSearchParam] = useState('')
	const [blogs,setBlogs] = useState([])

	
	const {
		data:blogsData,
		loading:blogLoading,
		error
	} = useQuery(GetBlogs)
	
	useMemo(()=>{
		setBlogs(blogsData?.blogIndex.edges.map(item=>item.node))
		console.log(blogsData?.blogIndex.edges.map(item=>item.node))
	},[blogLoading])


	return (
		<>
			<Head>
				<title>0xFethr</title>
				<meta
					name="description"
					content="Decentralised journalism application driven by the community"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className="mt-[10rem] flex flex-col items-center relative z-10">
				<SearchBar 
					searchParam={searchParams} 
					setSearchParam={setSearchParam}
				/>
				<TopBlogs 
					blogs={blogs} 
				/>
				<Quote 
					quote={quote} 
					author={author} 
				/>
				<Slider 
					blogs={blogs}
				/>
			</div>

			<div className='w-screen h-screen bg-[#8d8d8d21] border-none fixed z-0 top-0'>
				<div className="fixed z-0 -bottom-20 right-0 ">
					<Image
						className='blur-3xl opacity-50'
						src={'/purpleOrb.svg'}
						width={500}
						height={500}
						alt={'Feather'}
					/>
				</div>
				<div className="fixed z-0 -top-10 -left-20">
						<Image  
							className='blur-3xl opacity-50'
							src={'/orangeOrb.svg'}
							width={500}
							height={500}
							alt={'Feather'}
						/>
				</div>
			</div>
			<Footer/>
		</>
	)
}
