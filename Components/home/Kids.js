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
        <p>{JSON.stringify(images)}</p>
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
            {
                images?.map((image)=>(
                    <Link href="" className='imagediv'>
                        {/* <h2>{image}</h2> */}
                        <img className='coverimg' src="https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />                    
                    </Link>  
                ))
            }    

        </div>
    </div>
  </>
}

export default Kids