"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllImages, asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import { asyncuploadimages } from '@/Store/Actions/AdminActions'

const Images = () => {
    const [files, setfiles] = useState([])
    const [imageindex, setimageindex] = useState("")
    const dispatch = useDispatch()
    const { images , singleimages } = useSelector((state)=>state.ImagesReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)

    const indexHandler = (index)=>{
        dispatch(asyncaSingleImage(index))
        setimageindex(index)
        document.querySelector(".overlay").style.display = "initial"
    }
    
    const closingHandler = ()=>{
        document.querySelector(".overlay").style.display = "none"
    }

    const selectHandler = ()=>{
        document.querySelector("#fileinput").click()
    }

    const handleFileChange = (e) => {
        setfiles([...e.target.files]);
    };

    const ImagesUpload = (e) => {
        e.preventDefault();
        
        const images = new FormData(e.target);
        const files = e.target.images.files[0];
    
        for (let i = 0; i < files?.length; i++) {
            images.append("images", files[i]);
        }

        dispatch(asyncuploadimages(images))
        // console.log([...formdata.entries()])
    };
    


    return <> 
    <div className='imagesmaindiv'>
        <div className='imagetopdiv'>
            <h1>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ? 
                images?.map((image , index)=>(
                    <Suspense fallback={<h3>Loading........</h3>}>
                            <Link href={"/Content/singleimage/" + index} key={index} className='imagediv'>
                            <img className='coverimg' src={image.url} alt={`Image ${index}`} />
                        </Link>   
                    </Suspense>
                ))
                :
                <div className='notfounddiv'>
                    <h1>there is no images</h1>
                </div>
            }

            {
                isAuthenticated ? 
                    <div onClick={selectHandler} id='createpost' className='imagediv'>
                        <img src="../../stockimages/create.png" alt="" />
                        <h2>upload images</h2>
                    </div> 
                :
                ""
            }
            
            {/* <form style={{display:"none"}} onSubmit={ImagesUpload}  encType="multipart/form-data" > */}
            <form onSubmit={ImagesUpload}  encType="multipart/form-data" >
                <input onClick={handleFileChange} id='fileinput' type="file" name='images' multiple />
                <input type="submit" />
            </form>

            
        </div>
    </div>
   </>
}

export default Images