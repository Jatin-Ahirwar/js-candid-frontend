"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages, asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import Image from 'next/image'

const Images = () => {
    const [imageindex, setimageindex] = useState("")
    const dispatch = useDispatch()
    const { images , singleimages } = useSelector((state)=>state.ImagesReducer)

    useEffect(() => {
      dispatch(asyncaAllImages())
    }, [])

    const indexHandler = (index)=>{
        dispatch(asyncaSingleImage(index))
        setimageindex(index)
        document.querySelector(".overlay").style.display = "initial"
        // const overlay = document.querySelector(".overlay").style.display = "initial"
    }

    const closingHandler = ()=>{
        document.querySelector(".overlay").style.display = "none"
    }


    return <> 
    <div className='imagesmaindiv'>
        <p>{JSON.stringify(images)}</p>
        <p>{JSON.stringify(singleimages)}</p>
        <div className='imagetopdiv'>
            <h1 style={{letterSpacing:"5px"}}>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            {
                images?.map((image , index)=>(
                    // <Link href={"/Content/singleimage/" + index} onClick={()=> indexHandler(index)} key={index} className='imagediv'>
                    // <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                    <Link href="" onClick={()=> indexHandler(index)} key={index} className='imagediv'>
                        {/* <img className='coverimg' src="https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                        {/* <img className='coverimg' src={image} alt={`Image ${index}`} /> */}
                        <img className='coverimg' src={`../../public/uploads/${image}`} alt={`Image ${index}`} />
                    </Link>  
                ))
            }
        </div>
        <div className='overlay'>
            <img className='overlaybgimage' src="https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='overlaywraper'>
                <div className='overlaytop'>
                    <div className='overlayleft'>{imageindex + 1}/{images?.length}</div>
                    <div className='overlayright'><i onClick={closingHandler} id='cross' style={{fontSize:"4.5vh" , color:"white" , fontWeight:"100"}} class="ri-close-fill"></i></div>
                </div>
                <div className='overlaymid'>
                    <div onClick={()=> indexHandler(index)} className='overlaymidleft'>
                        <i class="ri-arrow-left-s-line"></i>
                    </div>
                    <div className='overlaymidcenter'>
                        <img className='overlaymidcenterimage' src={singleimages} alt="" />
                    </div>

                    <div onClick={()=> indexHandler(index)} className='overlaymidright'>
                        <i class="ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
}

export default Images