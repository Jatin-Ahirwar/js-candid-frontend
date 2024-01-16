"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages } from '@/Store/Actions/KidsActions'

const Kids = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(asyncaAllImages())
    },[])
    const { images } = useSelector((state)=>state.KidsReducer)
  return <>
    <div className='kidswrapper'>
        {/* <p>{JSON.stringify(images)}</p> */}
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
            {
                images?.map((image)=>(
                    <Link href="" className='imagediv'>
                        <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`} alt="" />
                    </Link>  
                ))
            }    

        </div>
    </div>
  </>
}

export default Kids