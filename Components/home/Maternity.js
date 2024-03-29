"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Maternity.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages } from '@/Store/Actions/MaternityActions'

const Maternity = () => {
  const dispatch = useDispatch()
  const { images } = useSelector((state)=>state.MaternityReducer)
  return (
    <div className='maternitymaindiv'>
      <p>{JSON.stringify(images)}</p>
        <div className='maternitytopdiv'>
            <h1 style={{letterSpacing:"5px"}}>MATERNITY</h1>
        </div> 
        <div className='maternitycontentwrapper'>
            <Link href="" className='imagediv'>
                <img className='coverimg' src="https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Link>  
        </div>
    </div>
  )
}

export default Maternity