import Link from 'next/link'
function BlogStrip({ title, body, setSelected, id, slug }) {
	return (
		<Link 
			href={`/blog/${slug}`}   
			onMouseOver={()=>setSelected(id)} 
			className="w-[40%] bg-main bg-opacity-50 rounded-xl p-5 font-[200] hover:bg-opacity-30 hover:bg-[#542483] glass relative z-5">
			<h2 className="font-[400] bold text-1xl">{title}</h2>
			<p className="italic text-md text-[#ffffff9f]">{body}</p>
		</Link>
	)
}

export default BlogStrip
