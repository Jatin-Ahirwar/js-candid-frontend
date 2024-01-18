"use client"
import "@/Components/home/Nav.css"
import Link from "next/link"
import React, { useEffect, useRef, useState } from 'react'

const Nav = () => {
  return <>
    <div className='nav'>
    <Link style={{textDecoration:"none" , color:"black"}} href="/"><h1 className="logo">Js<span>candid</span></h1></Link>
      <div className="links">
          <Link className="link" href="/Content/stories">Stories</Link>
          <Link className="link" href="/Content/images">Images</Link>
          <Link className="link" href="/Content/prewedding">PreWeddings</Link>
          <Link className="link" href="/Content/trailer">Trailers</Link>
          <Link className="link" href="/Content/contact">Contact</Link>
          <Link className="link" href="/Content/aboutus">About us</Link>
          <div className='profilediv'>
              <p style={{fontSize:"12px",display:"flex",alignItems:"center",cursor:"pointer"}}>MORE <i style={{fontSize:"15px"}} class="ri-arrow-down-s-fill"></i></p>
                <div className="hidden-nav">
                    <Link id="hiddenlink"  href="/Content/kids">baby & Kids </Link>
                    {/* <Link id="hiddenlink"  href="/Content/maternity">Maternity</Link> */}
                    <Link id="hiddenlink"  href="/Content/event">Events</Link>
                    <Link id="hiddenlink"  href="/Content/fashion">Fashion & Commercial</Link>
                    <Link id="hiddenlink"  href="/Content/signin">Sign in</Link>
                </div>
          </div>
      </div>
    </div>
  </>
}

export default Nav