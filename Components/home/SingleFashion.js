"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SingleFashion.css"

const SingleFashion = () => {
    const { singlefashion } = useSelector((state)=>state.FashionReducer)
  return (
    <div className='singleitemwrapper'>
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
            singlefashion?.images.map((image)=>(
              <div className='functionimage'>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`} alt="" />
              </div>                    
            ))
          }
        </div>

        {
            singlefashion?.teaser?.length > 0 ?
            
            <div className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={`${process.env.NEXT_PUBLIC_BASE_URL}/${singlefashion?.teaser}`}></video>
            </div>   
            
            : ""
        }  
        
    </div>
  )
}

export default SingleFashion