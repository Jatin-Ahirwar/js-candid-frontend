"use client"
import React, { useEffect } from 'react'
import '@/Components/home/Event.css'

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
        <div className='eventwrapper'>
            {/* <p>{JSON.stringify(events)}</p> */}
        <div className='fashiontopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Event</h2>
        </div>

        <div className='fashionstorycontent'>
            {
                events?.length > 0 ?
                    events?.map((event)=>(
                        <Link style={{textDecoration:"none", color:"black"}} href={`/Content/singleevent/${event._id}`} className='eventproductdiv'>
                            <div className='productcoverimgdiv' >
                                <img className='productcoverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${event.posterimage}`} alt="" />
                            </div>
                            <div className='productdetailsdiv'>
                                <h3 style={{textTransform:"uppercase"}}>{event.modelname}</h3> 
                                <p style={{fontFamily:"times" }}>Jaipur,India</p> 
                                <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase" , fontFamily:"times"}}>checkout <i class="ri-arrow-right-line"></i></h6> 
                                {/* <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase" , fontFamily:"times"}}>checkout </h6>  */}
                            </div>    
                        </Link>
                    ))
                    :
                 <h2>nahi hai bhai</h2>
            }

        </div>            
    </div>
  </>
}

export default Event