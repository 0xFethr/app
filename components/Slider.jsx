import Image from 'next/image'
import React, { useState } from 'react'

function Slider({ blogs }) {
    const [N, setN] = useState(0)
    return (
        <>
            <div className="">
                <div>
                    <Image src={''} alt="" fill />
                </div>

                <div className="">
                    <h2 className=""></h2>
                    <p></p>
                </div>

                <button className="" onChange={(e) => {}}>
                    <Image src={''} alt="" fill />
                </button>
            </div>

            <div>
                {blogs.map((blog, index) => (
                    <div className="out tooltip" onClick={() => setN(index)}>
                        <div className="tooltiptext"></div>
                        <div className=""></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Slider
