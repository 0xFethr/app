import Editor from '@/components/Editor'
import ImageUploader from '@/components/ImageUploader'
import Tags from '@/components/Tags'
import React, { useState } from 'react'

function Publish() {
    const [step,setStep] = useState(0)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState({})
    const [tags,setTags] = useState([])

    return(
        <>
            {step==0&&
            <div className=''>
                <Editor/>
                <button
                    className=''
                    onChange={(e)=>{}}
                >
                </button>

                <div className="">
                    <Image src={''} alt="" fill />
                </div>
            </div>}


            {step==1&&
            <div className=''>
                <ImageUploader/>
                <h2></h2>
                <p></p>
                <Tags/>

                <div className="">
                    <Image src={''} alt="" fill />
                </div>
            </div>}
        </>
    )
}

export default Publish
