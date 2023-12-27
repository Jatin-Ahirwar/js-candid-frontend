"use client"
import React, { useEffect } from 'react'
import "@/Components/home/images.css"
import LocomotiveScroll from 'locomotive-scroll'
import Link from 'next/link'


const Images = () => {
    useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    }, [])
    return <> 
    <div className='imagesmaindiv'>
        <div className='imagetopdiv'>
            <h1 style={{letterSpacing:"5px"}}>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Link>
            
        </div>

    </div>
   </>
}

export default Images