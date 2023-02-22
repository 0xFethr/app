import PriceCard from '@/components/PriceCard'
import Image from 'next/image'
import React from 'react'

function Pricing() {
    return (
        <div className="">
            <div className="">
                <PriceCard />
                <PriceCard />
            </div>
            <div className="">
                <Image src={''} alt="" fill />
            </div>
        </div>
    )
}

export default Pricing
