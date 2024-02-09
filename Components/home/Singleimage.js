"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "@/Components/home/Singleimage.css"
import Link from 'next/link'

const Singleimage = () => {
    const { singleimages } = useSelector((state)=>state.ImagesReducer)
    const dispatch = useDispatch()
    return <>
        <div className='singletrailerwrapper'>
            <div className='overlay'>
            <img className='overlaybgimage' src={singleimages?.url} alt="" />
            <div className='overlaywraper'>
                <div className='overlaytop'>
                    <div className='overlayright'>
                        {/* <div className='overlayleft'>{imageindex + 1}/{images?.length}</div> */}
                    </div>
                    <div className='overlayright'>
                        <Link style={{textDecoration:"none"}} href="/Content/images">
                            <i  id='cross' style={{fontSize:"4.5vh" , color:"white" , fontWeight:"100"}} class="ri-close-fill"></i>
                        </Link>
                    </div>
                </div>
                <div className='overlaymid'>
                    <div className='overlaymidcenter'>
                        <img className='overlaymidcenterimage' src={singleimages?.url} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default Singleimage