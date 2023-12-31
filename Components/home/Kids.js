"use client"
import React from 'react'
import "@/Components/home/Kids.css"
import Link from 'next/link'

const Kids = () => {
  return <>
    <div className='kidswrapper'>
        <div className='kidstopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>baby & kids</h2>
        </div>

        <div className='imagecontentwrapper'>
                <Link href="" className='imagediv'>
                    <img className='coverimg' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>anvesha</h4>
                    <h6>checkout <i class="ri-arrow-right-line"></i></h6>
                </Link>

                <Link href="" className='imagediv'>
                    <img className='coverimg' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>anvesha</h4>
                    <h6>checkout <i class="ri-arrow-right-line"></i></h6>
                </Link>  

                <Link href="" className='imagediv'>
                    <img className='coverimg' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>anvesha</h4>
                    <h6>checkout <i class="ri-arrow-right-line"></i></h6>
                </Link>

                <Link href="" className='imagediv'>
                    <img className='coverimg' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h4>anvesha</h4>
                    <h6>checkout <i class="ri-arrow-right-line"></i></h6>
                </Link>  

        </div>
    </div>
  </>
}

export default Kids