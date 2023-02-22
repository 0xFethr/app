import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
dynamic(import('react-quill/dist/quill.snow.css'), { ssr: false })

function Editor() {
    const [value, setValue] = useState('')
    return (
        <>
            <div className="">
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>

            <button className="" onChange={(e) => {}}></button>
        </>
    )
}

export default Editor
