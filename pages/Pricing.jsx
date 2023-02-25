import PriceCard from '@/components/PriceCard'
import Image from 'next/image'
import pricingData from '@/data/pricing.json'
import React from 'react'

function Pricing() {
    return (
        <>
            <div className="flex gap-20 w-screen h-[80vh] justify-center items-end  relative z-10">
                <PriceCard
                    type={false}
                    options={pricingData.basic} 
                />
                <PriceCard
                    type={true}
                    options={pricingData.pro} 
                />
            </div> 
            <div className="absolute opacity-70 -top-10 z-0 left-[22%]">
                <Image  
                    src={'/logo.svg'}
                    width={1000}
                    height={1000}
                    alt={'Feather'}
                />
            </div>      
            <div className="absolute opacity-70 top-[5%] left-[22%] z-0 animate splat">
                <Image  
                    src={'/orb.svg'}
                    width={1000}
                    height={1000}
                    alt={'Feather'}
                />
            </div>
        </>
    )
}

export default Pricing
