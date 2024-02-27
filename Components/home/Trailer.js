"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/Trailer.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Upload from './Upload'
import ConfirmationModal from './Confirmation'


const Trailer = () => {
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const { trailers } = useSelector((state)=>state.TrailerReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [trailerId, settrailerId] = useState("")
    
    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };

    const handleDeleteIconClick = (trailerId,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        settrailerId(trailerId)
        console.log(trailerId,imageType)
    };

    return <> 
    <div className='trailermaindiv'>
        {/* <p>{JSON.stringify(trailers)}</p> */}
        {UploadPostVisible && <Upload imageType="trailer"/>} 
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} trailerId={trailerId} />}

        <div className='trailertopdiv'>
            <h1 style={{letterSpacing:"5px"}}>TRAILERS</h1>
        </div> 
        <div className='trailercontentwrapper'>
            {
                trailers?.length > 0 ? 
                
                trailers?.map((trailer)=>(
                    <div className="trailerdiv animate__animated animate__fadeIn" key={trailer._id}>
                        <Link href={`/Content/singletrailer/${trailer._id}`} className='trailerdiv'>
                            <img className='coverimg' src={trailer.trailerposter.url} alt="" />
                            <i id='play' class="ri-play-mini-fill"></i>
                            <div className='pattern'>
                                <h2>{trailer.groomname} & {trailer.bridename}</h2>
                                <h4>{trailer.location} , {trailer.country}</h4>
                            </div>
                        </Link>
                        {isAuthenticated ? 
                            <div className='deletewrapper'>
                            <img 
                                onClick={() => {
                                handleDeleteIconClick(trailer._id, "deletetrailer");
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
                    <h1>there is no trailer's</h1>
                </div>
            }
            {
                isAuthenticated ?
                    <div className='trailerdiv'>
                            <img className='createicon' style={{cursor:"pointer",height:"10vh",transform:"rotate(45deg)"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>
                :
                ""
            }

        </div>
    </div>
   </>
}

export default Trailer