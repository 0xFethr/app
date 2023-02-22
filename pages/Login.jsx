import ImageUploader from '@/components/ImageUploader'
import React, { useState } from 'react'

function Login() {
    const [step, setStep] = useState(0)
    const [imageURL, setImageURL] = useState('')
    const [name, setName] = useState('')

    return (
        <>
            {step == 0 && (
                <div className="">
                    <Image src={''} alt="" fill />
                    <div className="">
                        <Image src={''} alt="" fill />
                    </div>
                    <p>
                        <span className=""></span>
                    </p>
                    <button className="" onChange={(e) => {}}></button>
                </div>
            )}

            {step == 1 && (
                <div>
                    <ImageUploader />
                    <div className="">
                        <input
                            className=""
                            value=""
                            onChange={(e) => {}}
                        ></input>
                        <button className="" onChange={(e) => {}}>
                            <Image src={''} alt="" fill />
                        </button>
                    </div>
                    <div className="">
                        <Image src={''} alt="" fill />
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
