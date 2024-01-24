"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages, asyncaSingleImage } from '@/Store/Actions/ImagesActions'

const Images = () => {
    const [files, setfiles] = useState([])
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

    const selectHandler = ()=>{
        document.querySelector("#fileinput").click()
    }

    const handleFileChange = (e) => {
        setfiles([...e.target.files]);
    };

    const uploadHandler = async (e)=>{
        e.preventDefault();
        console.log(e)

        // const fileInput = e.target.querySelector('input[type="file"]');
        // const files = fileInput.files;
    
        // const formData = new FormData();
    
        // for (let i = 0; i < files.length; i++) {
        //   formData.append('files', files[i]);
        // }
        // console.log(formData)
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
                images?.length > 0 ? 
                images?.map((image , index)=>(
                    // <Link href={"/Content/singleimage/" + index} onClick={()=> indexHandler(index)} key={index} className='imagediv'>
                    <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                    {/* <Link href="" onClick={()=> indexHandler(index)} key={index} className='imagediv'> */}
                        <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`} alt={`Image ${index}`} />
                    </Link>      
                ))
                :
                <div className='notfounddiv'>
                    <h1>there is no images</h1>
                </div>
            }

            <div onClick={selectHandler} id='createpost' className='imagediv'>
                <img src="../../stockimages/create.png" alt="" />
                <h2>upload images</h2>
            </div>
            

            <form onSubmit={uploadHandler} encType="multipart/form-data" >
                <input name='images' onClick={handleFileChange} id='fileinput' type="file" multiple />
                <input type="submit" />
            </form>

            
        </div>
    </div>
   </>
}

export default Images