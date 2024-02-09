"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SinglePrewed.css"

const SinglePrewed = () => {
    const { singleprewedding } = useSelector((state)=>state.PreweddingReducer)
    return (
    <div className='singleitemwrapper'>
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