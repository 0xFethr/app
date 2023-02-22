import React from 'react'
import Image from 'next/image'

function SearchBar({ searchParam, setSearchParam }) {
    return (
        <div className="">
            <div className="">
                <Image src={''} alt="" fill />
            </div>
            <input
                className=""
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="Search"
                type="search"
            />
            <div className=""></div>
        </div>
    )
}

export default SearchBar
