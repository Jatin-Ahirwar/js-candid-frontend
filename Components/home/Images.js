"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import UploadPost from './UploadPost'

const Images = () => {
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { images  } = useSelector((state)=>state.ImagesReducer)
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
                    <Suspense  fallback={<h3>Loading........</h3>} key={image._id}>
                        <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                            {
                                isAuthenticated ? 
                                    <img className='deleteicon' src="https://cdn.iconscout.com/icon/free/png-256/free-delete-892-1167842.png" alt="no delete" />
                                :
                                ""
                            }
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

        </div>
    </div>
   </>
}

export default Images