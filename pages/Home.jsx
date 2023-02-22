import Quote from '@/components/Quote'
import Slider from '@/components/Slider'
import TopBlogs from '@/components/TopBlogs'
import Weather from '@/components/Weather'
import React from 'react'

function Home() {
    return (
        <>
            <div className="">
                <Weather />
                <TopBlogs />
                <Quote />
                <Slider />
            </div>

            <div className="">
                <div className="">
                    <Image src={''} alt="" fill />
                </div>
                <div className="">
                    <Image src={''} alt="" fill />
                </div>
            </div>
        </>
    )
}

export default Home
