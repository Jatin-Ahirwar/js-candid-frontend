"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleStories.css"
import UploadPost from './UploadPost'

const SingleStories = () => {
    const { singlestories } = useSelector((state)=>state.StoriesReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };


    return (
    <div className='singleitemwrapper'>
        
        {UploadPostVisible && <UploadPost imageType={"storyfunction"}/>}
        
        {/* <p>{JSON.stringify(singlestories)}</p> */}
        <div className='storytopdiv'>
            <h2>{singlestories?.title}</h2>
            <h5>{singlestories?.groomname} & {singlestories?.bridename}</h5>
            <p>{singlestories?.date} | {singlestories?.venue} , {singlestories?.location}</p>
        </div>
        <div className='bestpic'>
            <img src="https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        {
            singlestories?.storiesfunction ?
            singlestories?.storiesfunction.map((storiesfunction)=>(
                <div className='functionswrapper'>
                    <h3>{storiesfunction.functionname}</h3>
                    {storiesfunction.images.map((image)=>(
                        <div className='functionimage'>
                            <img src={image.url} alt="" />
                        </div>
                    ))       
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
            <div className='createfunctiondiv' onClick={handleCreateIconClick}>
                    <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    <h3>Upload Images</h3>
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