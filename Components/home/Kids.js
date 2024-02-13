"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import UploadPost from './UploadPost'

const Kids = () => {
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const { images } = useSelector((state)=>state.KidsReducer)
    
    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };

    return <>
    <div className='kidswrapper'>
        {UploadPostVisible && <UploadPost imageType="kids" />} 
        {/* <p>{JSON.stringify(images)}</p> */}
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ?
                images?.map((image)=>(
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <Link href="" className='imagediv'>
                            <img className='coverimg' src={image.url} alt="" />
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
                    <div className='imagediv' style={{justifyContent:"center",cursor:"default"}}>
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