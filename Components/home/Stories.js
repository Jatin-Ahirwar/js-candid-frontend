// "use client"
// import React, { Suspense, useEffect } from 'react'
// import "@/Components/home/Stories.css"
// import Link from 'next/link'
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from 'react-redux';


// const Stories = () => {
//     const dispatch = useDispatch()
//     const { stories } = useSelector((state)=>state.StoriesReducer)

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 1 } },
//     };
//     return <>
//     <div className='storiesdiv'>
//         {/* <p>{JSON.stringify(stories)}</p> */}
//         <div className='storytopdiv'>
//             <h2 style={{letterSpacing:"5px"}}>STORIES</h2>
//             <h3>Delve deeper into our world of story-telling!</h3>
//         </div>
//         <div className='bottamline'></div>
//         <div className='storycontent'>
//             {
//                 stories?.length > 0 ?               
//                 stories?.map((story)=>(
//                     <Suspense fallback={<h1>Loading......</h1>} key={story._id}>
//                         <Link style={{textDecoration:"none", color:"black"}} href={"/Content/singlestories/" + story._id} className='storyproductdiv'>
//                             <div className='coverimgdiv' >
//                                 <img className='coverimg' src={story.posterimage.url} alt="" />
//                             </div>
//                             <div className='storydetailsdiv'>
//                                 <h3>{story.groomname} & {story.bridename}</h3> 
//                                 <h5>{story.date}</h5> 
//                                 <p>{story.venue} , {story.location}</p> 
//                             </div>    
//                         </Link>
//                 </Suspense>
//                 ))
//                 :
//                 <div className='notfounddiv'>
//                     <h1>there is no stories's</h1>
//                 </div>
//             }
//         </div>    
//     </div>
//     {/* </motion.div> */}
//    </>
// }

// export default Stories

import React, { Suspense, useEffect, useState } from 'react';
import "@/Components/home/Stories.css";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import Upload from './Upload';

const Stories = () => {
    const dispatch = useDispatch();
    const { stories } = useSelector((state)=>state.StoriesReducer);
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer);
    const [UploadPostVisible, setUploadPostVisible] = useState(false)


    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };
    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <>
            <div className='storiesdiv'>
                {UploadPostVisible && <Upload imageType="stories"/>} 

                <div className='storytopdiv'>
                    <h2 style={{letterSpacing:"5px"}}>STORIES</h2>
                    <h3>Delve deeper into our world of story-telling!</h3>
                </div>
                <div className='bottamline'></div>
                <div className='storycontent'>
                    {stories?.length > 0 ?               
                        stories?.map((story) => (
                            <Suspense fallback={<h1>Loading......</h1>} key={story._id}>
                                <Link style={{textDecoration:"none", color:"black"}} href={"/Content/singlestories/" + story._id} className='storyproductdiv'>
                                    <div className='coverimgdiv'>
                                        {imageError ? (
                                            <div className='spinner-div'>
                                                <p>Image not loaded properly. Please try again.</p>
                                            </div>
                                        ) : (
                                            <img className='coverimg' src={story.posterimage.url} alt="" onError={handleImageError} />
                                        )}
                                    </div>
                                    <div className='storydetailsdiv'>
                                        <h3>{story.groomname} & {story.bridename}</h3> 
                                        <h5>{story.date}</h5> 
                                        <p>{story.venue} , {story.location}</p> 
                                    </div>    
                                </Link>
                            </Suspense>
                        ))
                        :
                        <div className='notfounddiv'>
                            <h1>There are no stories.</h1>
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
    );
};

export default Stories;

