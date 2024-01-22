"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages, asyncaSingleImage } from '@/Store/Actions/ImagesActions'

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
        document.body.style.backgroundColor = "blue"
    }

    const closingHandler = ()=>{
        document.querySelector(".overlay").style.display = "none"
        document.body.style.backgroundColor = "red"
    }


    return <> 
    <div className='imagesmaindiv'>
        {/* <p>{JSON.stringify(images)}</p> */}
        {/* <p>{JSON.stringify(singleimages)}</p> */}
        <div className='imagetopdiv'>
            <h1>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            {
                images?.map((image , index)=>(
                    // <Link href={"/Content/singleimage/" + index} onClick={()=> indexHandler(index)} key={index} className='imagediv'>
                    <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                    {/* <Link href="" onClick={()=> indexHandler(index)} key={index} className='imagediv'> */}
                        <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`} alt={`Image ${index}`} />
                    </Link>  
                ))
            }
        </div>

    </div>
   </>
}

export default Images