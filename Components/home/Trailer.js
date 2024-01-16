"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Trailer.css"
import LocomotiveScroll from 'locomotive-scroll'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaalltrailers } from '@/Store/Actions/TrailerActions'


const Trailer = () => {
    const dispatch = useDispatch()
    const { trailers } = useSelector((state)=>state.TrailerReducer)

    useEffect(() => {
        try {
            dispatch(asyncaalltrailers())
        } catch (error) {
            console.log(error)
        }
    } , [])

    return <> 
    <div className='trailermaindiv'>
        {/* <p>{JSON.stringify(trailers)}</p> */}

        <div className='trailertopdiv'>
            <h1 style={{letterSpacing:"5px"}}>TRAILERS</h1>
        </div> 
        <div className='trailercontentwrapper'>
            {
                trailers?.map((trailer)=>(
                <Link href="" className='trailerdiv'>
                    {/* <img className='coverimg' src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                    <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${trailer.trailerposter}`} alt="" />
                    <i id='play' class="ri-play-mini-fill"></i>
                    <div className='pattern'>
                        <h2>{trailer.groomname} & {trailer.bridename}</h2>
                        <h4>{trailer.location} , {trailer.country}</h4>
                    </div>
                </Link>
                ))
            }
        </div>

    </div>
   </>
}

export default Trailer