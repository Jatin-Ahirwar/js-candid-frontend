"use client"
import React, { useEffect } from 'react'
import '@/Components/home/Fashion.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallevents } from '@/Store/Actions/EventActions'
const Event = () => {
    const dispatch = useDispatch()
    const { events } = useSelector((state)=>state.EventReducer)
    useEffect(()=>{
        dispatch(asyncaallevents())
    } , [])

  return <>
        <div className='fashionwrapper'>
            <p>{JSON.stringify(events)}</p>
        <div className='fashiontopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Event</h2>
        </div>

        <div className='fashionstorycontent'>
            {
                events?.map((event)=>(
                    <Link style={{textDecoration:"none", color:"black"}} href="" className='fashionproductdiv'>
                        <div className='productcoverimgdiv' >
                            <img className='productcoverimg' src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='productdetailsdiv'>
                            <h3 style={{textTransform:"uppercase"}}>{event.modelname}</h3> 
                            <p style={{fontFamily:"times" }}>Jaipur,India</p> 
                            <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase" , fontFamily:"times"}}>checkout <i class="ri-arrow-right-line"></i></h6> 
                        </div>    
                    </Link>
                ))
            }
        </div>    

        
    </div>
  </>
}

export default Event