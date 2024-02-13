"use client"
import React, { Suspense, useEffect, useState } from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaAllkidsImages } from '@/Store/Actions/KidsActions'
import { asyncuploadkidsimages } from '@/Store/Actions/AdminActions'
import Spin from './Spin'
import UploadPost from './UploadPost'

const Kids = () => {
    const [Loading, setLoading] = useState(false)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [files, setfiles] = useState("")
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const dispatch = useDispatch()
    const { images } = useSelector((state)=>state.KidsReducer)
    
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
        await dispatch(asyncuploadkidsimages(Images))
        setLoading(false);
        document.getElementById('fileInputtt').value = '';   
    }

    const handleCreateIconClick = () => {
        setUploadPostVisible(prevValue => !prevValue);
    };

    return <>
    <div className='kidswrapper'>
        {UploadPostVisible && <UploadPost />} 
        {/* <p>{JSON.stringify(images)}</p> */}
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
            {
                images?.length > 0 ?
                images?.map((image)=>(
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <Link href="" className='imagediv'>
                            <img className='coverimg' src={image.url} alt="" />
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
                    <div className='imagediv' style={{justifyContent:"center",cursor:"default"}}>
                        <img className='createicon' style={{cursor:"pointer"}} onClick={handleCreateIconClick} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>                
                :
                ""            
            } 
            {/* {
                isAuthenticated ? 
                    <div className='uploading'>
                        <input type="file" id="fileInputtt" onChange={handleFileChange} multiple />
                        <button onClick={ImagesUpload} disabled={Loading}>
                        {Loading ? 'Uploading...' : 'Upload Images'}
                        </button>
                        {Loading && (
                            <Spin/>
                        )}

                    </div>
                :
                ""
            } */}
        </div>
    </div>
  </>
}

export default Kids