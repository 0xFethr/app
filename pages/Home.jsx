import Quote from '@/components/Quote'
import Slider from '@/components/Slider'
import TopBlogs from '@/components/TopBlogs'
import Weather from '@/components/Weather'
import Image from 'next/image'
import fakeBlogs from '@/data/fakeBlogs.json'
import React, { useEffect, useState } from 'react'

function Home() {
    const [blogs,setBlogs] = useState([])


    useEffect(()=>{
        setBlogs(fakeBlogs)
    },[])


    return (
        <>
            <div className="mt-[10rem] flex flex-col items-center relative z-10">
                <Weather />
                <TopBlogs blogs={blogs} />
                <Quote />
                <Slider blogs={blogs} />
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
        </>
    )
}

export default Home
