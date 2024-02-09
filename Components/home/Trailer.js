"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Trailer.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaalltrailers } from '@/Store/Actions/TrailerActions'


const Trailer = () => {
    const dispatch = useDispatch()

    const { trailers } = useSelector((state)=>state.TrailerReducer)

    return <> 
    <div className='trailermaindiv'>
        {/* <p>{JSON.stringify(trailers)}</p> */}

        <div className='trailertopdiv'>
            <h1 style={{letterSpacing:"5px"}}>TRAILERS</h1>
        </div> 
        <div className='trailercontentwrapper'>
            {
                trailers?.length > 0 ? 
                
                trailers?.map((trailer)=>(
                    <Link href={`/Content/singletrailer/${trailer._id}`} className='trailerdiv'>
                        <img className='coverimg' src={trailer.trailerposter.url} alt="" />
                        <i id='play' class="ri-play-mini-fill"></i>
                        <div className='pattern'>
                            <h2>{trailer.groomname} & {trailer.bridename}</h2>
                            <h4>{trailer.location} , {trailer.country}</h4>
                        </div>
                    </Link>
                ))

                :
                <div className='notfounddiv'>
                    <h1>there is no trailer's</h1>
                </div>
            }
        </div>
    </div>
   </>
}

export default Trailer