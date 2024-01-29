"use client"
import "@/Components/home/Nav.css"
import Link from "next/link"
import React, { useEffect, useRef, useState } from 'react'

const Nav = () => {
    
    const OpenNavHandler = (e)=>{
      e.preventDefault()
      document.querySelector(".links").style.display = "flex"
      document.querySelector(".menuicon").style.display = "none"
      document.querySelector(".closingicon").style.display = "initial"
    }

    const CloseNavHandler = (e)=>{
      e.preventDefault()
      document.querySelector(".links").style.display = "none"
      document.querySelector(".menuicon").style.display = "initial"
      document.querySelector(".closingicon").style.display = "none"
    }

    const linkClickHandler = (e) => {
      e.preventDefault()
      document.querySelector(".links").style.display = "none";
    };

  return <>
    <div className='nav'>
    <Link style={{textDecoration:"none" , color:"black"}} href="/"><h1 className="logo">Js<span>candid</span></h1></Link>
      <div className="links">
          <Link className="link" onClick={linkClickHandler} href="/Content/stories">Stories</Link>
          <Link className="link" onClick={linkClickHandler} href="/Content/images">Images</Link>
          <Link className="link" onClick={linkClickHandler} href="/Content/prewedding">PreWeddings</Link>
          <Link className="link" onClick={linkClickHandler} href="/Content/trailer">Trailers</Link>
          <Link className="link" onClick={linkClickHandler} href="/Content/contact">Contact</Link>
          <Link className="link" onClick={linkClickHandler} href="/Content/aboutus">About us</Link>
          <div className='profilediv'>
              <div id="ptag"> 
                <p id="pp">MORE</p>
                <img id="ptagicon" src="../../stockimages/down-arrow.png" alt="" />
                {/* <i id="ptagicon" class="ri-arrow-down-s-fill"></i> */}
              </div>
                <div className="hidden-nav">
                    <Link id="hiddenlink"  onClick={linkClickHandler} href="/Content/kids">baby & Kids </Link>
                    {/* <Link id="hiddenlink"  onClick={linkClickHandler} href="/Content/maternity">Maternity</Link> */}
                    <Link id="hiddenlink"  onClick={linkClickHandler} href="/Content/event">Events</Link>
                    <Link id="hiddenlink"  onClick={linkClickHandler} href="/Content/fashion">Fashion & Commercial</Link>
                    <Link id="hiddenlink"  onClick={linkClickHandler} href="/Content/signin">Sign in</Link>
                </div>
          </div>

          <img className="closingicon" onClick={CloseNavHandler}  id="closenavicon"  src="../../stockimages/creame close.png" alt="" />                    
      </div>
          <img className="menuicon" onClick={OpenNavHandler} id="opennavicon" src="../../stockimages/menu.png" alt="" />
    </div>
  </>
}

export default Nav