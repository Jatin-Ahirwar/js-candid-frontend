"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import UploadPost from './UploadPost'
import ConfirmationModal from './Confirmation'
import Spin from './Spin'

const Kids = () => {
    const { images } = useSelector((state)=>state.KidsReducer)
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
    <div className='kidswrapper'>
        {UploadPostVisible && <UploadPost imageType="kids" />} 
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} imageIndex={imageIndex} />}

        {/* <p>{JSON.stringify(images)}</p> */}
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='kidsimagecontentwrapper'>
            {
                images?.length > 0 ?
                images?.map((image,index)=>(
                    <div className="kidsimagediv" key={image._id}>
                        <Link href="" className='kidsimagediv' key={index}>
                            <img className='kidscoverimg' src={image.url} alt="" />
                        </Link>
                        {isAuthenticated ? 
                        <div className='deletewrapper'>
                        <img 
                            onClick={() => {
                            handleDeleteIconClick(index, "deletekidsimage");
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
                    <Spin/>
                </div>
            }

            {
                isAuthenticated ?
                    <div className='kidsimagediv' style={{justifyContent:"center",cursor:"default"}}>
                        <img className='createicon' style={{cursor:"pointer"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>                
                :
                ""            
            } 
        </div>
    </div>
  </>
}

export default Kids