"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Prewed.css"
import Link from 'next/link'

const Prewed = () => {
    return <> 
    <div className='storiesdiv'>
        <div className='storytopdiv'>
            <h1 style={{letterSpacing:"5px"}}>Pre-Weddings</h1>
        </div>
        <div className='storycontent'>
            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <p style={{fontFamily:"times"}}>Jaipur,India</p> 
                    <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                </div>    
            </Link>

            


        </div>    
    </div>
   </>

}

export default Prewed