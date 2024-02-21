"use client"
import React, { useState } from 'react'
import "@/Components/home/Prewed.css"
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Upload from './Upload'
import ConfirmationModal from './Confirmation'

const Prewed = () => {
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { preweddings } = useSelector((state)=>state.PreweddingReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [preweddingId, setpreweddingId] = useState("")
    
    const handleDeleteIconClick = (preweddingId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setpreweddingId(preweddingId)
        console.log(preweddingId,imageType)
    };

    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };

    return <> 
    <div className='preweddingdiv'>
        {UploadPostVisible && <Upload imageType="prewedding"/>} 
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} preweddingId={preweddingId} />}

        {/* <p>{JSON.stringify(preweddings)}</p> */}
        <div className='preweddingtopdiv'>
            <h1 style={{letterSpacing:"5px"}}>Pre-Weddings</h1>
        </div>
        <div className='bottamline'></div>

        <div className='preweddingcontent'>
            {
                preweddings?.length >  0 ?
                preweddings?.map((prewed)=>(
                    <div className="preweddingproductdiv" key={prewed._id}>
                        <Link  style={{textDecoration:"none", color:"black"}} href={`/Content/singleprewedding/${prewed._id}`} className='preweddingproductdiv'>
                            <div className='coverimgdiv' >
                                <img className='coverimg' src={prewed.posterimage.url} alt="" />
                                {/* <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${prewed.posterimage}`} alt="" /> */}
                            </div>
                            <div className='preweddingdetailsdiv'>
                                <h3 style={{textTransform:"uppercase"}}>{prewed.groomname} & {prewed.bridename}</h3> 
                                <p style={{fontFamily:"times",textTransform:"capitalize"}}>{prewed.location} , {prewed.country}</p> 
                                <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                            </div>    
                        </Link>
                        {isAuthenticated ? 
                            <div className='deletewrapper'>
                            <img 
                                onClick={() => {
                                handleDeleteIconClick(prewed._id, "deleteprewedding");
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
                    <h1>there is no prewedding's</h1>
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

export default Prewed