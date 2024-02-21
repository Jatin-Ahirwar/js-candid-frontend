"use client"
import React, { useEffect, useState } from 'react'
import '@/Components/home/Fashion.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallfashion } from '@/Store/Actions/FashionActions'
import Upload from './Upload'
import ConfirmationModal from './Confirmation'
const Fashion = () => {
    const dispatch = useDispatch()
    const { fashions } = useSelector((state)=>state.FashionReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [fashionId, setfashionId] = useState("")
    
    const handleDeleteIconClick = (fashionId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setfashionId(fashionId)
        console.log(fashionId,imageType)
    };

    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };

    return <>
        <div className='fashionwrapper'>
            {UploadPostVisible && <Upload imageType="fashion"/>} 
            {DeleteImageVisible && <ConfirmationModal  imageType={imageType} fashionId={fashionId} />}

            {/* <p>{JSON.stringify(fashions)}</p> */}
        <div className='fashiontopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>fashion & commercial</h2>
        </div>

        <div className='fashionstorycontent'>
            {
               fashions?.length > 0 ?
                fashions?.map((fashion)=>(
                    <div className="fashionproductdiv">
                        <Link style={{textDecoration:"none", color:"black"}} href={`/Content/singlefashion/${fashion._id}`} className='fashionproductdiv'>
                            <div className='productcoverimgdiv' >
                                <img className='productcoverimg' src={fashion.posterimage.url} alt="" />
                            </div>
                            <div className='productdetailsdiv'>
                                <h3>{fashion.modelname}</h3> 
                                <p>{fashion.location} , {fashion.country}</p> 
                                <h6>Read More <i class="ri-arrow-right-line"></i></h6> 
                            </div>    
                        </Link>
                        {isAuthenticated ? 
                                <div className='deletewrapper'>
                                <img 
                                    onClick={() => {
                                    handleDeleteIconClick(fashion._id, "deletefashion");
                                    }} 
                                    className='deleteimageicon' 
                                    src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                                    alt="" 
                                    
                                />
                                </div>
                            : 
                            null
                        }


                    </div>
                ))
                :
                <div className='notfounddiv'>
                    <h1>there is no images</h1>
                </div>
            }
            {
                    isAuthenticated ?
                        <div className='createediv'>
                                <img className='createicon' style={{cursor:"pointer",height:"10vh",transform:"rotate(45deg)"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                        </div>
                    :
                    ""
                }
        </div>    
    </div>
  </>
}

export default Fashion