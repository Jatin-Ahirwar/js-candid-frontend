"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleFashion.css"
import UploadPost from './UploadPost'
import ConfirmationModal from './Confirmation'

const SingleFashion = () => {
    const { singlefashion } = useSelector((state)=>state.FashionReducer)
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
    <div className='singleitemwrapper animate__animated animate__fadeIn '>
        {UploadPostVisible && <UploadPost imageType={imageType} fashionId={singlefashion?._id}/>}
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} fashionId={singlefashion?._id} imageIndex={imageIndex} />}
        

        {/* <p>{JSON.stringify(singlefashion)}</p> */}
        <div className='storytopdiv'>
            <h2 >{singlefashion?.modelname}</h2>
        </div>
        <div className='bestpic'>
            <img src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>  
        <h3 id='teasername'>PICTURES</h3>
        <div className='functionswrapper'>
          {
            singlefashion?.images.map((image,index)=>(
              <div className='functionimage' key={image._id}>
                    {isAuthenticated ? 
                      <div className='deletewrapper'>
                      <img 
                          onClick={() => handleDeleteIconClick(index,"deletefashionimage")} 
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
                  <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick("singlefashionimages")}>
                      <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                      <h3>Upload More Images</h3>
                  </div>
              :
              null
          }    

        </div>

        {
            // singlefashion?.teaser?.length > 0 ?
            singlefashion?.teaser ?
            
            <div style={{marginTop:"20px"}} className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={singlefashion?.teaser.url}></video>
            </div>   
            
            : ""
        }  
        
    </div>
  )
}

export default SingleFashion