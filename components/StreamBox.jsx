import React, { useState } from 'react'

function StreamBox({ author }) {
    const [amount, setAmount] = useState(0)
    return (
        <div className="">
            <h2 className=""></h2>
            <p></p>
            <input
                className=""
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="" onChange={(e) => {}}></button>
        </div>
    )
}

export default StreamBox
