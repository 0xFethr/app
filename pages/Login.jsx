import ImageUploader from '@/components/ImageUploader'
import Image from 'next/image'
import camera from '@/public/camera.svg'
import React, { useState } from 'react'

function Login() {
    const [step, setStep] = useState(0)
    const [image, setImage] = useState(camera)
    const [name, setName] = useState('')
    const [user,setUser] = useState({})

    return (
        <>
            {step == 0 && (
                <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
                    <Image
                        src={'/metamask.svg'}
                        width={300}
                        height={300}
                        alt={'Feather'}
                    />
                    <p className='font-[400] relative z-10'>
                        Log in with your
                        <span className="text-accent"> Metamask</span>
                    </p>
                    <button 
                        className="bg-accent p-2 rounded-xl w-[10%] relative z-10" 
                        onClick={(e) => setStep(1)}>
                            Connect
                    </button>
                    <div className="absolute z-0 top-[10%] animate splat blur-3xl">
                        <Image
                            src={'/profileOrb.svg'}
                            width={1000}
                            height={1000}
                            alt={'Feather'}
                        />
                    </div>
                </div>
            )}

            {step == 1 && (
                <div className='w-screen h-screen flex flex-col gap-10 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
                    <ImageUploader 
                        image={image}
                        setImage={image}
                    />
                    <div className="w-[35%] flex flex-col items-center justify-center relative">
                        <input
                            className=" relative z-10  italic  bg-[#cccccc2a] p-3 rounded-xl w-[80%] glassNoBorder  text-[#cccccc7a] placeholder:text-[#cccccc7a] "
                            value={name}
                            placeholder="Username"
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                        <a
                            className="absolute right-[15%] z-10 "
                            href={'/Profile'}>
                            <Image 
                                src={'/tickName.svg'} 
                                width={20} 
                                height={20} 
                                alt={'Feather'} 
                            />
                        </a>
                    </div>
                    <div className="absolute z-0 top-[10%] animate splat blur-3xl">
                        <Image
                            src={'/profileOrb.svg'}
                            width={1000}
                            height={1000}
                            alt={'Feather'}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
