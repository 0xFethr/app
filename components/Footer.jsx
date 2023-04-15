import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const ring = useRef(null)
    const body = useRef(null)

    useEffect(() => {
        sessionStorage.removeItem('guests')

        body.current?.addEventListener('mousemove', (e) => {
            ring.current.style.left = e.clientX + 'px'
            ring.current.style.top = e.clientY + 'px'
        })
        body.current?.addEventListener('mouseleave', (e) => {
            ring.current.style.opacity = '0'
        })
        body.current?.addEventListener('mouseenter', (e) => {
            ring.current.style.opacity = '1'
        })
    }, [])

    return (
        <footer className="relative -mt-[20rem] w-screen h-screen overflow-hidden flex flex-col justify-end">
            <div className="absolute z-0 top-0 w-full">
                <Image  
                    className='w-full h-[20%]'
                    src={'/gigaOrb.svg'}    
                    width={90}
                    height={20}
                    alt={'Feather'}/>
            </div>
            <div className="ring-white" ref={ring}></div>
            <div
                className="w-full h-[55%] bg-main rounded-t-[5rem] flex flex-col items-center hero font-thin relative z-20 justify-end"
                ref={body}
            >
                <div className="line mt-5"></div>
                <div className="flex justify-between pl-10 h-[50%]  w-screen ">
                    <ul className="opacity-[0.8] font-Gazapacho italic font-[1000] text-8xl leading-[80%] tracking-widest text-left w-3/5">
                        <li className="relative z-5">Latest News</li>
                        <li className="relative z-20">Delivered with</li>
                        <li className="relative z-20">Authenticity</li>
                    </ul>
                    <div className="flex flex-col w-2/5 h-full text-center">
                        <Link
                            href={'#'}
                            className="h-1/3 w-full  hover:bg-secondary hover:bg-opacity-10"
                        >
                            <p className="flex justify-center items-center h-full w-full border-[1.5px] border-[#ffffff52]">
                                Facebook
                            </p>
                        </Link>
                        <Link
                            href={'#'}
                            className="h-1/3 w-full  hover:bg-secondary hover:bg-opacity-10"
                        >
                            <p className="flex justify-center items-center h-full w-full border-[1.5px] border-[#ffffff52]">
                                Instagram
                            </p>
                        </Link>
                        <Link
                            href={'#'}
                            className="h-1/3 w-full  hover:bg-secondary hover:bg-opacity-10"
                        >
                            <p className="flex justify-center items-center h-full w-full border-[1.5px] border-[#ffffff52]">
                                Discord
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
