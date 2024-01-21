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
            {/* <p>{JSON.stringify(fashions)}</p> */}
        <div className='fashiontopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>fashion & commercial</h2>
        </div>

        <div className='fashionstorycontent'>
            {
                fashions?.map((fashion)=>(
                    <Link style={{textDecoration:"none", color:"black"}} href={`/Content/singlefashion/${fashion._id}`} className='fashionproductdiv'>
                        <div className='productcoverimgdiv' >
                            <img className='productcoverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${fashion.posterimage}`} alt="" />
                        </div>
                        <div className='productdetailsdiv'>
                            <h3>{fashion.modelname}</h3> 
                            <p>{fashion.location} , {fashion.country}</p> 
                            <h6>Read More <i class="ri-arrow-right-line"></i></h6> 
                            {/* <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More</h6>  */}
                        </div>    
                    </Link>
                ))
            }
        </div>    

        
    </div>
  </>
}

export default Fashion