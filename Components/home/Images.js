"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import { asyncuploadimages } from '@/Store/Actions/AdminActions'
import Spin from './Spin'
import UploadPost from './UploadPost'

const Images = () => {
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { images , singleimages } = useSelector((state)=>state.ImagesReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
   
    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };
    
    return <> 
    <div className='imagesmaindiv'>
    {UploadPostVisible && <UploadPost imageType="images"/>} 

        <div className='imagetopdiv'>
            <h1>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ? 
                images?.map((image , index)=>(
                    <Suspense fallback={<h3>Loading........</h3>} key={image._id}>
                            <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                            <img className='coverimg' src={image.url} alt={`Image ${index}`} />
                        </Link>   
                    </Suspense>
                ))
                :
                <div className='notfounddiv'>
                    <h1>there is no images</h1>
                </div>
            }

            {
                isAuthenticated ?
                    <div className='imagediv' style={{cursor:"default",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <img className='createicon' style={{cursor:"pointer",height:"10vh",transform:"rotate(45deg)"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>                
                :
                ""            
            } 


            {/* {
                isAuthenticated ? 
                    <div className='uploading'>
                        <input type="file" id="fileInputtt" onChange={handleFileChange} multiple />
                        <button onClick={ImagesUpload} disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload Images'}
                        </button>
                        {loading && (
                            <Spin/>
                        )}

                    </div>
                :
                ""
            } */}

            
        </div>
    </div>
   </>
}

export default Images