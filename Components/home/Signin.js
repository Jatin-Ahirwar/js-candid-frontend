"use client"
import React from 'react'
import "@/Components/home/Signin.css"
import Link from 'next/link'

const Signin = () => {
  return (
    <div className='signinmaindiv'>
        <div className='signintopdiv'>
            <h1 style={{letterSpacing:"5px"}}>SIGN IN</h1>
        </div> 
        <div className='signincontentwrapper'>
            <div className='signincontent'>
              <form className='signinform'>
                  <div className='signinput-wrapper'>
                        <label className='signinlabel'>USERNAME<span> (required)</span></label>
                        <input className='signinput' required type="text" />
                  </div>

                  <div className='signinput-wrapper'>
                        <label className='signinlabel'>PASSWORD<span> (required)</span></label>
                        <input className='signinput' required type="password" />
                  </div>

                  <button type='submit' className='signinbtn'><p>submit</p></button>       

              </form>
            </div>
        </div>
    </div>
  )
}

export default Signin