"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllkidsImages } from '@/Store/Actions/KidsActions'

const Kids = () => {
    const dispatch = useDispatch()
    const { images } = useSelector((state)=>state.KidsReducer)
    return <>
    <div className='kidswrapper'>
        {/* <p>{JSON.stringify(images)}</p> */}
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ?
                images?.map((image)=>(
                    <Link href="" className='imagediv'>
                        <img className='coverimg' src={image.url} alt="" />
                    </Link>  
                ))                
                :                
                <div className='notfounddiv'>
                    <h1>there is no images</h1>
                </div>
            }
        </div>
    </div>
  </>
}

export default Kids