"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleStories.css"

const SingleStories = () => {
    const { singlestories } = useSelector((state)=>state.StoriesReducer)
  return (
    <div className='singleitemwrapper'>
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
            singlestories?.storiesfunction.map((storiesfunction)=>(
                <div className='functionswrapper'>
                    <h3>{storiesfunction.functionname}</h3>
                    {storiesfunction.images.map((image)=>(
                        <div className='functionimage'>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`} alt="" />
                        </div>
                    ))}
                    
        </div>
        ))
        }
        {
            singlestories?.teaser.length > 0 ? 
            <>
            <h3 style={{marginBottom:"4vh"}} id='teasername'>TEASER</h3>
            <div className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={`${process.env.NEXT_PUBLIC_BASE_URL}/${singlestories?.teaser}`}></video>
            </div> 
            </>
            : ""  
        }
    </div>
  )
}

export default SingleStories