// import Image from 'next/image'
import React from 'react'
import Image from 'next/image'

function Profile({ profilePic, name, slug, isPremium, user, author }) {
    return (
        <>
            {author && (
                <>
                    <div className="">
                        {/* <Image src={''} alt="" fill /> */}
                    </div>
                    <div className="">
                        {/* <Image src={''} alt="" fill /> */}
                        <h2></h2>
                    </div>
                    <div className="">
                        {/* <Image src={''} alt="" fill /> */}
                        <button className="" onChange={(e) => {}}></button>
                    </div>
                </>
            )}

            {user && (
                <>
                    <div className="">
                        {/* <Image src={''} alt="" fill /> */}
                        <div>
                            {/* <Image src={''} alt="" fill /> */}
                        </div>
                    </div>
                    <div className="">
                        {/* <Image src={''} alt="" fill /> */}
                        <h2></h2>
                    </div>
                </>
            )}

            {!user & !author && (
                <>
                    <a className="relative flex felx-col justify-center h-auto w-auto" href={`/Profile/${slug}`}>
                        <p className="absolute bottom-10 z-10 font-[800]">{name}</p>
                        <div className='absolute glassNoBorder bg-[#83838356] rounded-b-full bottom-0 h-[50%] w-full'></div>
                        <div className="">
                            <Image 
                                className='rounded-full'
                                src={profilePic} 
                                width={150} 
                                height={150} 
                                alt={'Feather'} 
                            />
                        </div>
                    </a>
                </>
            )}
        </>
    )
}

export default Profile
