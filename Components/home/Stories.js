"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Stories.css"
import LocomotiveScroll from 'locomotive-scroll'
import Link from 'next/link'


const Stories = () => {
    useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    }, [])
    return <> 
    <div className='storiesdiv'>
        <div className='storytopdiv'>
            <h2>STORIES</h2>
            <h3>Delve deeper into our world of story-telling!</h3>
        </div>
        <div className='storycontent'>
            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link>

            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link>

            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link> 

            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link>    
                
            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link>
            
            <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                <div className='coverimgdiv' >
                    <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='storydetailsdiv'>
                    <h3>SHIVAM & SHRASTI</h3> 
                    <h5 style={{fontWeight:"100"}}>11/12/2022</h5> 
                    <p style={{fontStyle:"italic"}}>PALM SPRING RESORT BHOPAL</p> 
                </div>    
            </Link>

        </div>    
    </div>
   </>
}

export default Stories