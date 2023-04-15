import Image from 'next/image'
import React, { useState, useRef } from 'react'

function ImageUploader({ image, setImage}) {
    
    const [file, setFile] = useState()
    const imageUploader = useRef()

    const uploadImage = async (e) => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onloadend = () => {
            setFile(file)
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
        <label className="glassNoBorder bg-[#cccccc35] w-[30%] h-[40%] rounded-3xl border-2 border-[#ffffff79] flex flex-col justify-center items-center">
            <Image 
                src={image} 
                width={100}
                height={100}
                alt='Image Upload' 
            />
            <input
                ref={imageUploader}
                type="file"
                onChange={uploadImage}
                className="opacity-0"
            />
        </label>
    )
}

export default ImageUploader
