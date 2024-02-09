"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleEvent.css"

const SingleEvent = () => {
    const { singleevent } = useSelector((state)=>state.EventReducer)
  return (
    <div className='singleitemwrapper'>
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
        <div className='functionswrapper'>
          {
            singleevent?.images.map((image)=>(
              <div className='functionimage'>
                  <img src={image.url} alt="" />
              </div>                    
            ))
          }
        </div>

          {
            // singleevent?.teaser?.length > 0 ? 
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