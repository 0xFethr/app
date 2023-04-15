
function Quote({quote,author}) {    
    
    return (
        <div className="italic font-[100] text-center my-20 w-[50%] select-none	">
            <h2 className="font-Gazapacho font-[1000] text-6xl">"{quote}"</h2>
            <p >-{author}</p>
        </div>
    )
}

export default Quote
