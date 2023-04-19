import Link from 'next/link'
function BlogStrip({ title, content='', author }) {
	return (
		<Link 
			href={content}
			className="w-[70%] bg-main bg-opacity-50 rounded-xl p-10 font-[200] hover:bg-opacity-30 hover:bg-[#542483] glass relative z-5 my-2">
			<h2 className="font-[800] bold text-4xl font-Gazapacho italic">
                {title}
            </h2>
		</Link>
	)
}

export default BlogStrip