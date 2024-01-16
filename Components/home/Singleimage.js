"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "@/Components/home/Singleimage.css"

const Singleimage = () => {
    const { singleimages } = useSelector((state)=>state.ImagesReducer)
    const dispatch = useDispatch()
    return <>
        <div className='wrappp'>            
            <p>{JSON.stringify(singleimages)}</p>
            <div className='wrapperoverlay'>
                
            </div>
        </div>
    </>
}

export default Singleimage