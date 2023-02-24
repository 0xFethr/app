import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Quote() {
    const [quote,setQuote] = useState('')
    const [quoteAuthor,setQuoteAuthor] = useState('')

    useEffect(() => {
        const getQuote = async () => {
            const res = await axios.get('https://quotes.rest/qod')
                             .then(resp=>resp.data?.contents?.quotes[0]) 
            setQuote(res.quote)
            setQuoteAuthor(res.author)
            console.log(res)
        }
        getQuote()
    }, [])
    
    return (
        <div className="italic font-[100] text-center my-20 w-[50%] select-none	">
            <h2 className="font-Gazapacho font-[1000] text-6xl">"{quote}"</h2>
            <p >-{quoteAuthor}</p>
        </div>
    )
}

export default Quote
