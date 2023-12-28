'use client'
import React, { useEffect } from 'react'
import "@/Components/home/Contact.css"

const Contact = () => {
    return <>
    <div className='contactmaindiv'>
        <div className='contacttopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Contact us</h2>
        </div>
        <div className='contactgreets'>
            <div className='para'>
                <p>We love making films and are honoured to be considered by you to document your wedding story for posterity.</p>
                <p>This website best showcases our work - every film, every image and every song here represents who we are and what we stand for. </p>
                <p>If you would like your wedding story to be filmed by us, grab a cup of coffee and write in every detail you can think of. Tell us your story. This helps us gain insight into your personalities and know you better as people. In fact, some of our best films have started off as chronicles on the keyboard right in front of you.</p>
                <p>Years later, when you see your films & photographs, not only will you begin to relive the priceless moments of these special days but also see how beautifully and gracefully your love has matured. </p>
                <p>We would love to curate this film for you as nothing gives us greater pleasure than to make these once-in-a-lifetime films from moments that don’t have a second take.</p>
            </div>
            <div className='ownership'>
                <h1>"Jayant Arya"</h1>
                {/* <h3>-- Founder, Js Candid --</h3> */}
                {/* <h5>— FOUNDER, JS CANDID</h5> */}
                <h6>—  FOUNDER,  JS CANDID</h6>
            </div>
        </div>
        <div className='contactformdiv'>
            <h2 className='mandatory'>Mandatory Details</h2>
            <form className='form'>
                <div className='input-wrapper'>
                    <label className='label'>YOUR EVENT/WEDDING/FUNCTION DETAILS  <span> (required)</span></label>
                    <p style={{fontSize:"10px"}}>What are the tentative events / functions / timings per day </p>
                    <textarea  className='textarea' required  type="text"></textarea>
                </div>
                
                <div className='input-wrapper'>
                    <label className='label'>YOUR EVENT/WEDDING/FUNCTION DATES  <span> (required)</span></label>
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