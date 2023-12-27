"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Trailer.css"
import LocomotiveScroll from 'locomotive-scroll'
import Link from 'next/link'


const Trailer = () => {
    useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    }, [])
    return <> 
    <div className='imagesmaindiv'>
        <div className='imagetopdiv'>
            <h1 style={{letterSpacing:"5px"}}>TRAILERS</h1>
        </div> 
        <div className='imagecontentwrapper'>
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='pattern'></div>
            </Link>
            
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Link>
            
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1520886272478-69aed2b3685b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Link>
            
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Link>
            
        </div>

    </div>
   </>
}

export default Trailer