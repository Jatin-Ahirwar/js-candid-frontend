"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import {  useSelector } from 'react-redux'
import UploadPost from './UploadPost'
import ConfirmationModal from './Confirmation'

const Images = () => {
    const { images  } = useSelector((state)=>state.ImagesReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [imageIndex, setimageIndex] = useState("")

    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };
    const handleDeleteIconClick = (index,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setimageIndex(index)
        console.log(index,imageType)
    };
    
    return <> 
    <div className='imagesmaindiv'>
    {UploadPostVisible && <UploadPost imageType="images"/>} 
    {DeleteImageVisible && <ConfirmationModal  imageType={imageType} imageIndex={imageIndex} />}

        <div className='imagetopdiv'>
            <h1>IMAGES</h1>
        </div> 

        <div className='imagecontentwrapper '>
            {
            images?.length > 0 ? 
                images?.map((image, index) => (
                    <div className='animate__animated animate__fadeIn animate__slow imagediv ' key={image._id}>
                    <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                        <img className='coverimg' src={image.url} alt={`Image ${index}`} />
                    </Link>  
                    {isAuthenticated ? 
                        <div className='deletewrapper'>
                        <img 
                            onClick={() => {
                            handleDeleteIconClick(index, "deleteimage");
                            }} 
                            className='deleteimageicon' 
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                            alt="" 
                            
                        />
                        </div>
                        : null
                    }
                    </div>
                ))
            :
            <div className='notfounddiv'>
                <h1>There are no images</h1>
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


