"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/images.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import { asyncuploadimages } from '@/Store/Actions/AdminActions'
import Spin from './Spin'

const Images = () => {
    const [loading, setLoading] = useState(false);
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
        const files = e.target.files;
        setfiles(files);
    };

    const ImagesUpload = async (e) =>{
            e.preventDefault()
            if (!files) {
                alert('Please select files to upload.');
                return;
            }
          
              const Images = new FormData();
              for (const file of files) {
                Images.append('images', file);
            }
            setLoading(true);
            // console.log([...Images.entries()])
            await dispatch(asyncuploadimages(Images))
            setLoading(false);
            document.getElementById('fileInputtt').value = '';   
        }


    return <> 
    <div className='imagesmaindiv'>
        <div className='imagetopdiv'>
            <h1>IMAGES</h1>
        </div> 
        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ? 
                images?.map((image , index)=>(
                    <Suspense fallback={<h3>Loading........</h3>} key={image._id}>
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
            
            {
                isAuthenticated ? 
                    <div className='uploading'>
                        <input type="file" id="fileInputtt" onChange={handleFileChange} multiple />
                        <button onClick={ImagesUpload} disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload Images'}
                        </button>
                        {loading && (
                            <Spin/>
                        )}

                    </div>
                :
                ""
            }

            
        </div>
    </div>
   </>
}

export default Images