import React, { useState, useEffect } from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
    const { scrollYProgress } = useScroll()
    const router = useRouter()
    const scaleX = useSpring(scrollYProgress)
    const [user,setUser] = useState(null)
    const [route,setRoute] = useState(router.asPath)

    useEffect(() => {
        setRoute(router.asPath)
      }, [router.asPath]);

    return (
        <div className='w-full flex justify-center relative'>
            <nav className="flex w-[90%] rounded-2xl items-center justify-between fixed top-0 italic font-[100] text-[#ffffff92] px-10 glass mt-2 z-50 bg-[#cccccc1e] overflow-x-hidden">
            
                <Link 
                    href={'/Home'} 
                    className="flex flex-col">
                    <div>
                        <Image
                            src={'/logo.svg'}
                            width={50}
                            height={100}
                            alt={'Feather'}
                        />
                    </div>
                    {route=='/Home'?
                    <div className="absolute z-0 animate-spin-slow -top-1 left-6">
                        <Image
                            className='animate splat delay-1'
                            src={'/orb.svg'}
                            width={70}
                            height={70}
                            alt={'Feather'}
                        />
                    </div>:
                    <div className="absolute z-0 animate-spin-slow">
                        <Image
                            src={'/orb.svg'}
                            width={50}
                            height={50}
                            alt={'Feather'}
                        />
                    </div>}
                </Link>


                <div className=" flex gap-10">
                    <Link className="hover:text-[white] hover:font-[400]" href={'/Publish'}>publish</Link>
                    <Link className="hover:text-[white] hover:font-[400]" href={'/Pricing'}>pricing</Link>
                    <Link className="hover:text-[white] hover:font-[400]" href={'/Warden'}>warden</Link>
                    <Link className="hover:text-[white] hover:font-[400]" href={'/Search'}>search</Link>
                    <Link className="hover:text-[white] hover:font-[400]" href={'https://fethfaucet.netlify.app/'}>faucet</Link>
                </div>
                

                <Link href={'/Login'} className=" flex flex-col relative">
                    <div className=''>
                        {user?
                        <Image 
                            className='rounded-full'
                            src={''} 
                            width={100} 
                            height={100} 
                            alt={'Feather'} 
                        />:
                        <Image 
                            className='rounded-full'
                            src={'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png'} 
                            width={50} 
                            height={100} 
                            alt={'Feather'} 
                        />}
                    </div>
                </Link>

                {route=='/Login'&&
                <div className="absolute z-0 -right-10 animate splat delay-1">
                    <Image 
                        src={'/purpleOrb.svg'} 
                        width={150} 
                        height={100} 
                        alt={'Feather'} 
                    />
                </div>}
                {route.includes('/Blog')&&
                <motion.div 
                    style={{scaleX}}
                    className="fixed -z-20 opacity-80 blur-sm rounded-full gradient right-0 origin-left h-[2rem] -bottom-2 left-2">
                </motion.div>}
            </nav>
        </div>
    )
}

export default Navbar
