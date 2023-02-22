import Image from 'next/image'

function PriceCard({ type, options }) {
    return (
        <div className="">
            <h2 className=""></h2>
            <ul className="">
                {options.map((option, index) => (
                    <li className="" key={index}>
                        <Image src="" fill alt="" />
                        <p></p>
                    </li>
                ))}
            </ul>
            <button className="" onChange={(e) => {}}></button>
        </div>
    )
}

export default PriceCard
