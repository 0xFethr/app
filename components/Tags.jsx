import React, { useState } from 'react'
import Image from 'next/image'

function Tags({ tags, setTags }) {
    const [newTag, setNewTag] = useState('')
    const [toogleSearch, setToggleSearch] = useState(false)

    return (
        <>
            {tags.map((tag, index) => (
                <a key={index} href="" className="">
                    <h2 className=""></h2>
                    <Image src={''} alt="" fill />
                </a>
            ))}

            {toogleSearch ? (
                <div className="">
                    <button
                        className=""
                        onClick={() => setToggleSearch((prev) => !prev)}
                    >
                        <Image src={''} alt="" fill />
                    </button>

                    <input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Search"
                        type="search"
                        className=""
                    />

                    <button onClick={() => setTags()} key={index} className="">
                        <Image src={''} alt="" fill />
                    </button>
                </div>
            ) : (
                <div
                    className=""
                    onClick={() => setToggleSearch((preVal) => !preVal)}
                >
                    <Image src={''} alt="" fill />
                </div>
            )}
        </>
    )
}

export default Tags
