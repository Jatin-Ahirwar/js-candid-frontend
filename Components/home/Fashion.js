"use client"
import React, { useEffect } from 'react'
import '@/Components/home/Fashion.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallfashion } from '@/Store/Actions/FashionActions'
const Fashion = () => {
    const dispatch = useDispatch()
    const { fashions } = useSelector((state)=>state.FashionReducer)
    useEffect(()=>{
        dispatch(asyncaallfashion())
    } , [])

  return <>
        <div className='fashionwrapper'>
            <p>{JSON.stringify(fashions)}</p>
        <div className='fashiontopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>fashion & commercial</h2>
        </div>

        <div className='fashionstorycontent'>
            {
                fashions?.map((fashion)=>(
                    <Link style={{textDecoration:"none", color:"black"}} href="" className='fashionproductdiv'>
                        <div className='productcoverimgdiv' >

                            <img className='productcoverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${fashion.posterimage}`} alt="" />
                            {/* <img className='productcoverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                        </div>
                        <div className='productdetailsdiv'>
                            <h3>SHIVAM & SHRASTI</h3> 
                            <p style={{fontFamily:"times"}}>Jaipur,India</p> 
                            <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                        </div>    
                    </Link>
                ))
            }
        </div>    

        
    </div>
  </>
}

export default Fashion