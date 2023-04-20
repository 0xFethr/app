import Link from 'next/link'
function NotificationStrip({ title, content }) {
	return (
		<div 
			className="w-[70%] bg-main bg-opacity-50 rounded-xl p-10 font-[200] hover:bg-opacity-30 hover:bg-[#542483] glass relative z-5 my-2">
			<h2 className="font-[800] bold text-4xl font-Gazapacho italic">
				{title}
			</h2>
			<p className="italic text-md text-[#ffffff9f]">{content}</p>
		</div>
	)
}

export default NotificationStrip