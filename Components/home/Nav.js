"use client"
import "@/Components/home/Nav.css"
import { asyncsignoutadmin } from "@/Store/Actions/AdminActions"
import Link from "next/link"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

const Nav = () => {
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const dispatch = useDispatch()
    
    const signout = async (e) =>{
      await dispatch(asyncsignoutadmin())
    }
    
    const [navbar, setnavbar] = useState(true)
    
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

    return <>
    <div className='nav'>
    <Link style={{textDecoration:"none" , color:"black"}} href="/"><h1 className="logo">Js<span>candid</span></h1></Link>
      {navbar ?
      <div className="links">
      <Link className="link" href="/Content/stories">Stories</Link>
      <Link className="link" href="/Content/images">Images</Link>
      <Link className="link" href="/Content/prewedding">PreWeddings</Link>
      <Link className="link" href="/Content/trailer">Trailers</Link>
      <Link className="link" href="/Content/contact">Contact</Link>
      <Link className="link" href="/Content/aboutus">About us</Link>
      <div className='profilediv'>
          <div id="ptag"> 
            <p id="pp">MORE</p>
            <img id="ptagicon" src="../../stockimages/down-arrow.png" alt="" />
            {/* <i id="ptagicon" class="ri-arrow-down-s-fill"></i> */}
          </div>
            <div className="hidden-nav">
                <Link id="hiddenlink"  href="/Content/kids">baby & Kids </Link>
                {/* <Link id="hiddenlink"  href="/Content/maternity">Maternity</Link> */}
                <Link id="hiddenlink"  href="/Content/event">Events</Link>
                <Link id="hiddenlink"  href="/Content/fashion">Fashion & Commercial</Link>
                <Link id="hiddenlink"  href="/Content/signin">Sign in</Link>
            </div>
        </div>
        <img className="closingicon" onClick={CloseNavHandler}  id="closenavicon"  src="../../stockimages/creame close.png" alt="" />                    
        </div>      
      :
      ""
    }
    <img className="menuicon" onClick={OpenNavHandler} id="opennavicon" src="../../stockimages/menu.png" alt="" />

    </div>
  </>
}

export default Nav