"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleEvent.css"
import UploadPost from './UploadPost'

const SingleEvent = () => {
    const { singleevent } = useSelector((state)=>state.EventReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const handleCreateIconClick = (imageType) => {
        setUploadPostVisible(prevValue => !prevValue);
        setimageType(imageType)
    };
  
    return (
    <div className='singleitemwrapper'>
        {UploadPostVisible && <UploadPost imageType={imageType} eventId={singleevent?._id}/>}

        {/* <p>{JSON.stringify(singleevent)}</p> */}
        <div className='storytopdiv'>
            {/* <h2 >{singleevent?.title}</h2> */}
            <h2 >{singleevent?.modelname}</h2>
            {/* <h5 >{singleevent?.groomname} & {singleevent?.bridename}</h5> */}
            {/* <p>{singleevent?.date} | {singleevent?.venue} , {singleevent?.location}</p> */}
        </div>
        <div className='bestpic'>
            <img src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>  
        <h3 id='teasername'>PICTURES</h3>
        <div className='functionswrapper' style={{backgroundColor:"rebeccapurple"}}>
          {
            singleevent?.images.map((image)=>(
              <div className='functionimage'>
                  <img src={image.url} alt="" />
              </div>                    
            ))
          }
        
        {
            isAuthenticated ?
                // <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick(storiesfunction._id,"functionimages")}>
                <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick("singleeventimages")}>
                    <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    <h3>Upload More Images</h3>
                </div>
            :
            null
        }    

        </div>
        

        {
          singleevent?.teaser ? 
            <div className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={singleevent?.teaser.url}></video>
            </div>   
          
          : ""
        }

    </div>
  )
}

export default SingleEvent