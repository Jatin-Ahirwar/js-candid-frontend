"use client"
import React from 'react'
import "@/Components/home/UploadPost.css"

const UploadPost = () => {
  return <>
    <div className="overlayy">
        <div className='boxx'>
            <div className='closingwrapper'>
                <img  className='closeeicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
            </div>
            <div className='boxxmain'>
                <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                <h3>Upload Images</h3>
            </div>
            <div className='btmline'></div>
            <div className='filesdiv'>
              
                <div className='files'>
                    <h3>IMG.filename.jpg</h3>
                    <img className='removefile' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                </div>

                <div className='files'>
                    <h3>IMG.filename.jpg</h3>
                    <img className='removefile' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                </div>

            </div>
            <div className='btn'>
                <button type='submit'>Upload</button>
            </div>
        </div>
    </div>
    </>
}

export default UploadPost