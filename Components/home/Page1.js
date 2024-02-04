"use client"
import React from 'react'
import '@/Components/home/page1.css'
import { useSelector } from 'react-redux'

const Page1 = () => {
  return <>
    <div className='page1'>
        <div className="hoverdiv">
          
          <div className='imagecontainer'>
              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
          </div>

          <div className='imagecontainer'>
              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
          </div>

          <div className='imagecontainer'>
              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className='portraitimage'>
                <img src="https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
          </div>

        </div>
    </div>
  </>
}

export default Page1