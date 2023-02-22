import Image from 'next/image'
import React from 'react'

function Profile({ profilePic, name, slug, isPremium, user, author }) {
    return (
        <>
            {author && (
                <>
                    <div className="">
                        <Image src={''} alt="" fill />
                    </div>
                    <div className="">
                        <Image src={''} alt="" fill />
                        <h2></h2>
                    </div>
                    <div className="">
                        <Image src={''} alt="" fill />
                        <button className="" onChange={(e) => {}}></button>
                    </div>
                </>
            )}

            {user && (
                <>
                    <div className="">
                        <Image src={''} alt="" fill />
                        <div>
                            <Image src={''} alt="" fill />
                        </div>
                    </div>
                    <div className="">
                        <Image src={''} alt="" fill />
                        <h2></h2>
                    </div>
                </>
            )}

            {!user & !author && (
                <>
                    <a className="" href="">
                        <div className="">
                            <Image src={''} alt="" fill />
                        </div>
                        <p className=""></p>
                    </a>
                </>
            )}
        </>
    )
}

export default Profile
