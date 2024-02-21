"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleEvent.css"
import UploadPost from './UploadPost'
import ConfirmationModal from './Confirmation'

const SingleEvent = () => {
    const { singleevent } = useSelector((state)=>state.EventReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [imageIndex, setimageIndex] = useState("")

    const handleCreateIconClick = (imageType) => {
        setUploadPostVisible(prevValue => !prevValue);
        setimageType(imageType)
    };

    const handleDeleteIconClick = (index,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setimageIndex(index)
        console.log(index,imageType)
    };
  
    return (
    <div className='singleitemwrapper'>
        {UploadPostVisible && <UploadPost imageType={imageType} eventId={singleevent?._id}/>}
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} eventId={singleevent?._id} imageIndex={imageIndex} />}

        {/* <p>{JSON.stringify(singleevent)}</p> */}
        <div className='storytopdiv'>
            <h2 >{singleevent?.modelname}</h2>
        </div>
        <div className='bestpic'>
          <img src={singleevent?.posterimage.url} alt="" />
        </div>  
        <h3 id='teasername'>PICTURES</h3>
        <div className='functionswrapper'>
          {
            singleevent?.images.map((image,index)=>(
              <div className='functionimage' key={image._id}>
                  {isAuthenticated ? 
                      <div className='deletewrapper'>
                      <img 
                          onClick={() => handleDeleteIconClick(index,"deleteeventimage")} 
                          className='deleteimageicon' 
                          src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                          alt="" 
                      />
                      </div>
                      : null
                  }
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
        
        <h3 id='teasername'>TEASER</h3>

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