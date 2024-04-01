"use client"
import React, { useEffect, useState } from 'react';
import '@/Components/home/page1.css';
import Footter from './Footer';

const Page1 = () => {
  return (
    <>
      <div className="pagecontainer">
        <div className='animate__animated animate__fadeIn page1'>
          <div className="textdiv">
              <h1>Welcome</h1>
              <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
              <div className="liness" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <p>JS Candid is your expert for crafting the ultimate event photography experience.</p>
                <p>We skillfully capture your unique moments, blending creativity and precision into every shot.</p>
                <p>Our dedication transforms these moments into beautifully documented stories, ensuring timeless memories.</p>
                <p>Trust JS Candid for an unparalleled photographic journey that lasts a lifetime.</p>
              </div>
              <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
          </div>
        </div>

        <div className='animate__animated animate__fadeIn page2' > 
            <div className="small">
              <p id='small-p'>"Through the lens, we capture promises of forever, translating your 'happily ever after' into visual poetry.<br/> Your moments, our enchanting magic—crafted to fulfill your vision."</p>
              <h5 id='small-h' >— js candid</h5>
            </div>
            <h2 className='textcenter'>WHAT WE LOVE ?</h2> 
            <div className="big">
              <div className="bigdiv">
                  <p className='bigdiv-p'>We're die-hard romantics, photographers by passion. Travelling worldwide to capture your special day, we share a collective passion for narrating your story through our lenses.</p>
              </div>
            </div>
        </div>

        <div id="page3" className='animate__animated animate__fadeIn page3'>
            <div id='divvv' style={{height:"1px", width:"1px"}}></div>
            <h2 className='textcenter'>WHAT WE BELIEVE ?</h2> 
            <div className="big">
              <div className="bigdiv">
                <p className='bigdiv-p'>Marriages are promises of forever, akin to 'happily ever after.' Enchantingly bringing your envisioned magic onto the screen, crafting reality in every photograph, making dreams a visual tale.</p>
              </div>
            </div>
        </div>

        <div id="page4" className='animate__animated animate__fadeIn page4'>
          <div id='divvv' style={{height:"1px", width:"1px"}}></div>
              <h2 className='textcenter'>WHAT WE DO ?</h2> 
              <div className="big" style={{backgroundColor:"#F9F3E7"}}>
                <div style={{flexDirection:"column",gap:"10px"}}  className="bigdiv">
                  <p style={{lineHeight:"unset"}} className='bigdiv-p'>We curate cherished moments filled with love, crafting your wedding film into a contemporary cinematic record.</p>
                  <p style={{lineHeight:"unset",width:"90%"}} className='bigdiv-p'>Meticulously edited, it becomes an everlasting testament to your dream story. Timeless images complement vibrant film energy.</p>
                </div>
              </div>
        </div>
        <Footter />
      </div>
    </>
  );
}

export default Page1;