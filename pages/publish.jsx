import ImageUploader from '@/components/ImageUploader'
import Tags from '@/components/Tags'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState, useContext } from 'react'
import { NFTContract } from '@/contract'
import { useMutation } from '@apollo/client';
import { uploadNFT } from '@/config/NFTStorage'
import camera from '@/public/camera.svg'
import { AuthContext } from '@/context/AuthContext'
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
//import { loader } from 'graphql.macro';
//const PostBlog = loader('../apollo/Blogs/addBlog.graphql');
//const GetBlogs = loader('../apollo/Department/getBlogs.gql');

function Publish() {
    const [step,setStep] = useState(0)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [image, setImage] = useState(camera)
    const [tags,setTags] = useState([])

    const {address, provider} = useContext(AuthContext)
    const [addBlog] = useMutation(PostBlog, { 
        variables: { id:id },
        update(cache, { data: { addBlog } }) {
            const { blogs } = cache.readQuery({ query: GetBlogs });
            cache.writeQuery({
                query: GetBlogs,
                data: { blogs: [...blogs, addBlog] },
            }); 
        },
    });

    const handlePublish = async () => {
        //add meta data to nft storage
        const cid = await uploadNFT({body,title,image})

        //mint NFT
        const contract = await NFTContract(address,provider)
        const _title = title
        const _image = cid
        const NFT = await contract.createBlog(_title,_image)

        //mutate the graph and update the stored cache
        addBlog()
    }

    return(
        <>
            {step==0&&
            <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
                <input
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className=" relative z-10 text-3xl italic font-Gazapacho font-[1000] bg-[#cccccc2a] p-5 rounded-xl w-[80%] glassNoBorder  text-[#cccccc7a] placeholder:text-[#cccccc7a] "
                    placeholder='Title'
                />
                <div className="glassNoBorder rounded-3xl bg-[#6c6c6c45] w-[80%] h-[95%] mb-10 relative z-10">
                    <ReactQuill 
                        style={{
                            height:'95%',
                            width:'100%',
                        }}
                        placeholder='Body'
                        theme="snow" 
                        value={body} 
                        onChange={setBody} 
                    />
                </div>
                <div className="fixed z-0 -bottom-[25%] -left-[15%] ">
                    <Image
                        className='blur-3xl opacity-50'
                        src={'/purpleOrb.svg'}
                        width={1000}
                        height={1000}
                        alt={'Feather'}
                    />
                </div>
                <button
                    className='absolute bottom-20 right-[12%] hover:opacity-50 z-10'
                    onClick={(e)=>setStep(prev => ++prev)}>
                    <Image 
                        src={'/Ok.svg'} 
                        width={70} 
                        height={70} 
                        alt={'Feather'} 
                    />
                </button>
            </div>}


            {step==1&&
            <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center py-20 mt-20 overflow-hidden select-none'>
                <div className="glassNoBorder rounded-3xl bg-[#6c6c6c45] w-[80%] h-[95%] mb-10 relative z-10  flex flex-col gap-5 justify-center items-center">
                    <ImageUploader
                        image={image}
                        setImage={setImage}
                    />
                    <h2 className='text-3xl italic font-Gazapacho font-[1000]'>{title}</h2>
                    {/* <p>{body}</p> */}
                    <Tags 
                        tags={tags}
                        setTags={setTags}
                    />
                </div>
                <div className="fixed z-0 -bottom-[25%] -left-[15%] ">
                    <Image
                        className='blur-3xl opacity-50'
                        src={'/orangeOrb.svg'}
                        width={1000}
                        height={1000}
                        alt={'Feather'}
                    />
                </div>
                <button
                    className='absolute bottom-20 right-[12%] hover:opacity-50 z-10'
                    onClick={(e)=>setStep(prev => ++prev)}>
                    <Image 
                        src={'/Ok.svg'} 
                        width={70} 
                        height={70} 
                        alt={'Feather'} 
                    />
                </button>
            </div>}
        </>
    )
}

export default Publish
