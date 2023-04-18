import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Tags({ tags, setTags }) {
    const [newTag, setNewTag] = useState('')
    const [toogleSearch, setToggleSearch] = useState(false)

    return (
        <div className='flex gap-5 items-center'>
            
            {!toogleSearch&&
            tags.length==0&&
            <p>Add tags</p>}

            {tags.map((tag, index) => (
                <Link 
                    key={index} 
                    href={`/search?keyword=${tag.name}`}
                    className="p-[6px] bg-[#ce65ff7a] rounded-xl min-w-[5rem] text-center">
                    <h2 className="italic text-[100]">{tag.name}</h2>
                </Link>
            ))}

            {toogleSearch ? (
                <div className="relative flex items-center">
                    <button
                        className="absolute right-5"
                        onClick={() => {
                            setToggleSearch((prev) => !prev);
                            newTag?
                            setTags(()=>[...tags,{name:newTag}]):
                            setTags(()=>[...tags]);
                            return;
                        }}>

                        <Image 
                            src={'/plus.svg'} 
                            width={20} 
                            height={20} 
                            alt={'Feather'} 
                        />
                    </button>

                    <input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add Tag"
                        type="text"
                        className="rounded-xl p-[6px] bg-[#cccccc5d]"
                    />
                </div>
            ) : (
                <button
                    className=""
                    onClick={() => setToggleSearch((preVal) => !preVal)}>
                    <Image 
                        src={'/plus.svg'} 
                        width={20} 
                        height={20} 
                        alt={'Feather'} 
                    />
                </button>
            )}
        </div>
    )
}

export default Tags
