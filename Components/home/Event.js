"use client"
import React, { useEffect, useState } from 'react'
import '@/Components/home/Event.css'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallevents } from '@/Store/Actions/EventActions'
import Upload from './Upload'
import ConfirmationModal from './Confirmation'
const Event = () => {
    const dispatch = useDispatch()
    const { events } = useSelector((state)=>state.EventReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [eventId, seteventId] = useState("")
    
    const handleDeleteIconClick = (eventId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        seteventId(eventId)
        console.log(eventId,imageType)
    };

    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };


    
    return <>
        <div className='eventwrapper'>
        {UploadPostVisible && <Upload imageType="event"/>} 
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} eventId={eventId} />}
            
            {/* <p>{JSON.stringify(events)}</p> */}
        <div className='eventtopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Event</h2>
        </div>

        <div className='eventstorycontent'>
            {
                events?.length > 0 ?
                    events?.map((event)=>(
                        <div className="eventproductdiv animate__animated animate__fadeIn ">
                            <Link style={{textDecoration:"none", color:"black"}} href={`/Content/singleevent/${event._id}`} className='eventproductdiv'>
                                <div className='eventcoverimgdiv' >
                                    <img className='eventcoverimg' src={event.posterimage.url} alt="" />
                                </div>
                                <div className='eventdetailsdiv'>
                                    <h3 style={{textTransform:"uppercase"}}>{event.modelname}</h3> 
                                    <p style={{fontFamily:"times" }}>Jaipur,India</p> 
                                    <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase" , fontFamily:"times"}}>checkout <i class="ri-arrow-right-line"></i></h6> 
                                </div>    
                            </Link>
                            {isAuthenticated ? 
                                <div className='deletewrapper'>
                                <img 
                                    onClick={() => {
                                    handleDeleteIconClick(event._id, "deleteprewedding");
                                    }} 
                                    className='deleteimageicon' 
                                    src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                                    alt="" 
                                    
                                />
                                </div>
                            : 
                            null
                            }

                        </div>
                    ))
                    :
                    <div className='notfounddiv'>
                        <h1>there is no event's</h1>
                    </div>
                }
                {
                    isAuthenticated ?
                        <div className='createediv'>
                                <img className='createicon' style={{cursor:"pointer",height:"10vh",transform:"rotate(45deg)"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                        </div>
                    :
                    ""
                }

        </div>            
    </div>
  </>
}

export default Event