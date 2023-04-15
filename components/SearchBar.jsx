import React from 'react'
import Image from 'next/image'

function SearchBar({ searchParam, setSearchParam }) {



    return (
        <div className="w-[80%] relative flex flex-col items-center select-none my-20">
            <div className="absolute z-0 -bottom-[20vh]  w-full">
                <Image
                    className='w-full opacity-50 blur-3xl'
                    src={'/searchOrb.svg'}
                    width={100}
                    height={100}
                    alt={'Feather'}
                />
            </div>
            <input
                className="bg-[#cccccc2a] p-5 rounded-2xl w-full glassNoBorder border-none text-[#cccccc7a] placeholder:text-[#cccccc7a] px-20"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="Search Blogs"
                type="search"
            />
            <div className="absolute left-2 z-[10] top-[20%] cursor-pointer">
                <Image
                    className=''
                    src={'/search.svg'}
                    width={40}
                    height={40}
                    alt={'Feather'}
                />
            </div>
            {/* <div className="" ></div> */}
        </div>
    )
}

export default SearchBar
