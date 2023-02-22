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
        <footer className="relative w-screen h-screen overflow-hidden flex flex-col justify-end">
            <div className="ring-white" ref={ring}></div>
            <div className="absolute z-0 w-screen h-[80vh] bottom-[10%]">
                <Image src={'/gigaOrb.svg'} fill alt={'Feather'} />
            </div>
            <div
                className="w-full h-[55%] bg-main rounded-t-[5rem] flex flex-col items-center hero font-thin relative z-20 justify-end"
                ref={body}
            >
                <div className="relative flex justify-center items-center top-[-10%]">
                    <div className="absolute -top-[1.5rem] z-10 left-0">
                        <Image
                            src={'/logo.svg'}
                            width={50}
                            height={50}
                            className="backdrop "
                            alt={'Feather'}
                        />
                    </div>
                    <div className="absolute -top-20 z-10 -left-10">
                        <Image
                            src={'/logo.svg'}
                            width={150}
                            height={150}
                            alt={'Feather'}
                        />
                    </div>
                    <div className="absolute -top-10 -left-10 -z-1 animate-spin-slow">
                        <Image
                            src={'/orb.svg'}
                            width={100}
                            height={100}
                            alt={'Feather'}
                        />
                    </div>
                    <Link href="#h">
                        <p className="rounded-[50%] border-[1px] border-[#ffffff70] p-10 w-[10rem] h-[10rem] flex items-center text-center">
                            Join The Movement
                        </p>
                    </Link>
                </div>
                <div className="line mt-10"></div>
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
