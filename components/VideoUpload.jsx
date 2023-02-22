import React, { useState, useRef } from 'react'

function VideoUploader() {
    const [video, setVideo] = useState(
        'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png'
    )
    const [file, setFile] = useState()
    const videoUploader = useRef()

    const uploadVideo = async (e) => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onloadend = () => {
            setFile(file)
            setVideo(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
        <label className="">
            <div className="">
                <img className="" src={video} />
            </div>
            <input
                ref={videoUploader}
                type="file"
                onChange={uploadVideo}
                className=""
            />
        </label>
    )
}

export default VideoUploader
