import React, { useState, useRef } from 'react'

function ImageUploader() {
    const [profilePic, setProfilePic] = useState(
        'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png'
    )
    const [file, setFile] = useState()
    const imageUploader = useRef()

    const uploadProfilePic = async (e) => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onloadend = () => {
            setFile(file)
            setProfilePic(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
        <label className="">
            <div className="">
                <img className="" src={profilePic} />
            </div>
            <input
                ref={imageUploader}
                type="file"
                onChange={uploadProfilePic}
                className=""
            />
        </label>
    )
}

export default ImageUploader
