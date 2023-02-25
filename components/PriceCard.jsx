import Image from 'next/image'

function PriceCard({ type, options }) {
    return (
        <div className="glassPriceCard bg-[#a3a3a358] rounded-3xl p-5 px-20 py-10 border-opacity-60 flex flex-col items-center">
            {!type?
                <h2 className="text-center mb-5 text-5xl text-[#c551ff70]">Basic</h2>:
                <h2 className="text-center mb-5 text-5xl text-[#ff885566]">Pro</h2>
            }
            <ul className="flex flex-col h-full gap-10 text-[#ffffff9e]">
                {options.map((option, index) => (
                    <li className="flex gap-5" key={index}>
                        {!type?
                        <Image 
                            src="/X.svg"
                            width={20}
                            height={20}
                            alt="no" />:
                        <Image 
                            src="/o.svg" 
                            width={20}
                            height={20} 
                            alt="yes" 
                        />}
                        <p>{option}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PriceCard
