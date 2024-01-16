"use client"
import React, { useEffect } from 'react'
import "@/Components/home/Stories.css"
import Link from 'next/link'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { asyncaallstories } from '@/Store/Actions/StoriesActions';


const Stories = () => {
    const dispatch = useDispatch()
    const { stories } = useSelector((state)=>state.StoriesReducer)
    useEffect(()=>{
        dispatch(asyncaallstories())
    } , [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };
    return <>
    {/* <motion.div initial="hidden" animate="visible" variants={containerVariants} className='storiesdiv'> */}
    <div className='storiesdiv'>
        <p>{JSON.stringify(stories)}</p>
        <div className='storytopdiv'>
            <h2 style={{letterSpacing:"5px"}}>STORIES</h2>
            <h3>Delve deeper into our world of story-telling!</h3>
        </div>
        <div className='storycontent'>
            {
                stories?.map((story)=>(
                    <Link style={{textDecoration:"none", color:"black"}} href="" className='storyproductdiv'>
                        <div className='coverimgdiv' >
                            {/* <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                            <img className='coverimg' src={`../../public/uploads/`} alt="" />
                            {/* <img className='coverimg' src={story.posterimage} alt="" /> */}
                        </div>
                        <div className='storydetailsdiv'>
                            <h3 style={{textTransform:"uppercase"}}>{story.groomname} & {story.bridename}</h3> 
                            <h5 style={{fontWeight:"100",letterSpacing:"1px"}}>{story.date}</h5> 
                            <p style={{fontStyle:"italic",textTransform:"capitalize"}}>{story.venue} , {story.location}</p> 
                        </div>    
                    </Link>
                ))
            }
        </div>    
    </div>
    {/* </motion.div> */}
   </>
}

export default Stories