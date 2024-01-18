"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "@/Components/home/SingleTrailer.css"
import Link from 'next/link'

const SingleTrailer = () => {
    const { singletrailer } = useSelector((state)=>state.TrailerReducer)
    return (
        <div className='singletrailerwrapper'>
            <div className='overlay'>
            <video className='overlaybgimage' autoPlay muted loop src={`${process.env.NEXT_PUBLIC_BASE_URL}/${singletrailer?.trailervideo}`}></video>            
            <div className='overlaywraper'>
                <div className='overlaytop'>
                    <div className='overlayright'></div>
                    <div className='overlayright'>
                        <Link style={{textDecoration:"none"}} href="/Content/trailer">
                            <i  id='cross' style={{fontSize:"4.5vh" , color:"white" , fontWeight:"100"}} class="ri-close-fill"></i>
                        </Link>
                    </div>
                </div>
                <div className='overlaymid'>
                    <div className='overlaymidcenter'>
                        <video className='overlaymidcenterimage' autoPlay muted loop src={`${process.env.NEXT_PUBLIC_BASE_URL}/${singletrailer?.trailervideo}`}></video>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SingleTrailer