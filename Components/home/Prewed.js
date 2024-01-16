"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Prewed.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallprewedding } from '@/Store/Actions/PreweddingActions'

const Prewed = () => {
    const dispatch = useDispatch()
    const { preweddings } = useSelector((state)=>state.PreweddingReducer)
    useEffect(()=>{
        dispatch(asyncaallprewedding())
    } , [])

    return <> 
    <div className='storiesdiv'>
        {/* <p>{JSON.stringify(preweddings)}</p> */}
        <div className='storytopdiv'>
            <h1 style={{letterSpacing:"5px"}}>Pre-Weddings</h1>
        </div>
        <div className='storycontent'>
            {
                preweddings?.map((prewed)=>(
                    <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                        <div className='coverimgdiv' >
                            <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${prewed.posterimage}`} alt="" />
                        </div>
                        <div className='storydetailsdiv'>
                            <h3 style={{textTransform:"uppercase"}}>{prewed.groomname} & {prewed.bridename}</h3> 
                            <p style={{fontFamily:"times",textTransform:"capitalize"}}>{prewed.location} , {prewed.country}</p> 
                            <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                        </div>    
                    </Link>
                ))
            }
        </div>    
    </div>
   </>

}

export default Prewed