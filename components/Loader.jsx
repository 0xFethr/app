import Image from "next/image"
export default function Loader(){
	return (
		<div>
			<div className="absolute z-0 animate-spin-slow">
				<Image
					src={'/orb.svg'}
					width={50}
					height={50}
					alt={'Feather'}
				/>
			</div>
		</div>
	)
}