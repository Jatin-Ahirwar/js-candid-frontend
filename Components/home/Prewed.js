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
    <div className='preweddingdiv'>
        {/* <p>{JSON.stringify(preweddings)}</p> */}
        <div className='preweddingtopdiv'>
            <h1 style={{letterSpacing:"5px"}}>Pre-Weddings</h1>
        </div>
        <div className='bottamline'></div>

        <div className='preweddingcontent'>
            {
                preweddings?.length >  0 ?
                preweddings?.map((prewed)=>(
                    <Link  style={{textDecoration:"none", color:"black"}} href={`/Content/singleprewedding/${prewed._id}`} className='preweddingproductdiv'>
                        <div className='coverimgdiv' >
                            <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            {/* <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${prewed.posterimage}`} alt="" /> */}
                        </div>
                        <div className='preweddingdetailsdiv'>
                            <h3 style={{textTransform:"uppercase"}}>{prewed.groomname} & {prewed.bridename}</h3> 
                            <p style={{fontFamily:"times",textTransform:"capitalize"}}>{prewed.location} , {prewed.country}</p> 
                            <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                        </div>    
                    </Link>
                ))

                :
                <div className='notfounddiv'>
                    <h1>there is no prewedding's</h1>
                </div>
            }
        </div>    
    </div>
   </>

}

export default Prewed