'use client'
import React, { useEffect } from 'react'
import "@/Components/home/Contact.css"

const Contact = () => {
    return <>
    <div className='contactmaindiv'>
        <div className='contacttopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Contact us</h2>
        </div>
        <div className='contactformdiv'>
            <h2 className='mandatory'>Mandatory Details</h2>
            <form className='form'>
                <div className='input-wrapper'>
                    <label id='biglabels' className='label'>YOUR EVENT/WEDDING/FUNCTION DETAILS  <span> (required)</span></label>
                    <p style={{fontSize:"10px"}}>What are the tentative events / functions / timings per day </p>
                    <textarea  className='textarea' required  type="text"></textarea>
                </div>
                
                <div className='input-wrapper'>
                    <label id='biglabels' className='label'>YOUR EVENT/WEDDING/FUNCTION DATES  <span> (required)</span></label>
                    <input className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>venue  <span> (required)</span></label>
                    <p style={{fontSize:"10px"}}>Please mention the hotel, city & the country</p>
                    <input className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>CONTACT NUMBER  <span> (required)</span></label>
                    <input className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>your email address  <span> (required)</span></label>
                    <input className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>applicant name  <span> (required)</span></label>
                    <input className='input' required type="text" />
                </div>

                <div className='bgdiv'>
                    <div className='boxes'>
                        <label className='label'>Bride</label>
                        <input className='input'  type="text" />
                    </div> 

                    <div className='boxes'>
                        <label className='label'>groom</label>
                        <input className='input' type="text" />
                    </div>  
                </div> 

                <button type='submit' className='submitbtn'><p>submit</p></button>       
            </form>
            
        </div>
    </div>
  </>
}

export default Contact