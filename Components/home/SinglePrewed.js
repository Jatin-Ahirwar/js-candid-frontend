"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SinglePrewed.css"
import UploadPost from './UploadPost'

const SinglePrewed = () => {
    const { singleprewedding } = useSelector((state)=>state.PreweddingReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const handleCreateIconClick = (imageType) => {
        setUploadPostVisible(prevValue => !prevValue);
        setimageType(imageType)
    };

    return (
    <div className='singleitemwrapper'>
        {UploadPostVisible && <UploadPost imageType={imageType} preweddingId={singleprewedding?._id}/>}

        {/* <p>{JSON.stringify(singleprewedding)}</p> */}
        <div className='storytopdiv'>
            <h2>{singleprewedding?.groomname} & {singleprewedding?.bridename}</h2>
            <p>{singleprewedding?.date} | {singleprewedding?.location} , {singleprewedding?.country}</p>
        </div>
        <div className='bestpic'>
            <img src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='functionswrapper'>    
                <h3>IMAGES</h3>
            
            {
               singleprewedding?.images.length > 0 ?
                
               singleprewedding?.images.map((image)=>(
                <div className='functionimage'>
                    <img src={image.url} alt={`${image}`} />
                </div>                    
                ))
                
                : "THERE IS NO IMAGES "}

        </div>
        {
                    isAuthenticated ?
                        // <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick(storiesfunction._id,"functionimages")}>
                        <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick("singleprewedimages")}>
                            <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                            <h3>Upload More Images</h3>
                        </div>
                    :
                    null
        }    


        {
            // singleprewedding?.teaser.length > 0 ? 
            singleprewedding?.teaser ? 
            <>    
            <h3 id='teasername'>TEASER</h3>
            <div style={{margin:"3vh 0"}} className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={singleprewedding?.teaser.url}></video>
            </div>
               
            </>

            : ""

        }    

    </div>
  )
}

export default SinglePrewed