"use client"
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleStories.css"
import UploadPost from './UploadPost'
import ConfirmationModal from './Confirmation'

const SingleStories = () => {
    const { singlestories } = useSelector((state)=>state.StoriesReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [functionId, setfunctionId] = useState("")
    const [storyId, setstoryId] = useState("")
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [imageIndex, setimageIndex] = useState("")
    
    const handleDeleteIconClick = (index,functionId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setimageIndex(index)
        setfunctionId(functionId)
        console.log(imageIndex,functionId,imageType)
    };

    const handleDeleteFunctions = (functionId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setfunctionId(functionId)
        setstoryId(singlestories._id)
        console.log(functionId,imageType)
    };


    const handleCreateIconClick = (imageType,functionId) => {
        setUploadPostVisible(prevValue => !prevValue);
        setimageType(imageType)
        setfunctionId(functionId)
    };

    return (
    <div className='singleitemwrapper animate__animated animate__fadeIn '>
        {UploadPostVisible && <UploadPost imageType={imageType} functionId={functionId} storyId={singlestories?._id}/>}
        {DeleteImageVisible && <ConfirmationModal  storyId={singlestories?._id} imageType={imageType} functionId={functionId} imageIndex={imageIndex} />}
        
        {/* <p>{JSON.stringify(singlestories)}</p> */}
        <div className='storytopdiv'>
            <h2>{singlestories?.title}</h2>
            <h5>{singlestories?.groomname} & {singlestories?.bridename}</h5>
            <p>{singlestories?.date} | {singlestories?.venue} , {singlestories?.location}</p>
        </div>
        <div className='bestpic'>
            <img src={singlestories?.posterimage.url} alt="" />
        </div>

        {
            singlestories?.storiesfunction ?
            singlestories?.storiesfunction.map((storiesfunction)=>(
                <div className='functionswrapper' key={storiesfunction._id}>
                    {/* <h3 key={storiesfunction._id}> */}
                    <h3 >
                        {storiesfunction.functionname}
                        {isAuthenticated ? 
                            <div className='deletefashionwrapper'>
                                <img 
                                    onClick={() => handleDeleteFunctions(storiesfunction._id,"deletefunction")} 
                                    className='deletefashionicon' 
                                    src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                                    alt="" 
                                />
                            </div>
                            : 
                            null
                        }

                    </h3>
                    {storiesfunction.images.map((image,index)=>(
                        <div className='functionimage' key={image._id}>
                            {isAuthenticated ? 
                            <div className='deletewrapper'>
                                <img 
                                    onClick={() => handleDeleteIconClick(index,storiesfunction._id,"deletefunctionimage")} 
                                    className='deleteimageicon' 
                                    src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                                    alt="" 
                                />
                                </div>
                                : 
                                null
                            }

                            <img src={image.url} alt="" />
                        </div>
                    ))       
                    }  

                    {
                        isAuthenticated ?
                            <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick("functionimages",storiesfunction._id)}>
                                <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                                <h3>Upload More {storiesfunction.functionname} Images</h3>
                            </div>
                        :
                        null
                    }    

                </div>
                ))
        :
                "NO FUNCTIONS IMAGES FOUND"
        }

        {
            isAuthenticated ?
                <>
            {/* <div className='boxxmain' onClick={handleBoxMainClick}> */}
            <div className='createfunctiondiv' onClick={() => handleCreateIconClick("storyfunction")}>
                    <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    <h3>Create Function</h3>
            </div>
            </>                  
            :
            ""            
        }   








        {
            singlestories?.teaser ? 
            <>
            <h3 style={{marginBottom:"4vh"}} id='teasername'>TEASER</h3>
            <div className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={singlestories?.teaser.url}></video>
            </div> 
            </>
            : ""  
        }
    </div>
  )
}

export default SingleStories