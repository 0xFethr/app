import { NFTStorage, File, Blob } from 'nft.storage'
import axios from 'axios'
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEYyOGU2N0FjNGY1NEUyMTY1MkEyMzRGMzI4QjE1NUNkM2Q0QjIyMTMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3OTEyMzE2MjE4NywibmFtZSI6ImZldGhyIn0.jT7KHbzKdRyBaToOoS6fRIjgGTbbs7ZO14H7Lb6Wy-w'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

export async function uploadNFT(body, title, image) {
		const imageFile = new File([image], 'nft.png', { type: 'image/png' });
		const metadata = await client.store({
			name: title,
			description: body,
			image: imageFile
		});
		return metadata.url;
}

export async function uploadUserImage(image,username){
	const imageFile = new File([image], `${username}.png`, { type: 'image/png' });
	const metadata = await client.store({
		name: username,
		description: 'user profile image',
		image: imageFile
	});
	
	console.log(metadata.url)
	return metadata.url
}

export async function getNFTData(imageURL,username){

	if(imageURL?.includes('ipfs://')){
		let cid = imageURL?.toString().match(/ipfs:\/\/(.+?)\//)[1];
		const res = await axios.get(`https://${cid}.ipfs.dweb.link/image/${username}.png`)
		return res.data
	}
	if(imageURL){
		const res = await axios.get(imageURL?.toString())
		return res.data
	}
}

export async function getBlogData(URL){
	let cid = URL?.toString().match(/ipfs:\/\/(.+?)\//)[1];
	const res = await axios.get(`https://${cid}.ipfs.dweb.link`)
	return res.data
}