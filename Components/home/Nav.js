"use client"
import "@/Components/home/Nav.css"
import { asynccurrentadmin, asyncsignoutadmin } from "@/Store/Actions/AdminActions"
import Link from "next/link"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

const Nav = () => {
    const { admin , isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const dispatch = useDispatch()
    
    const SignOutHandler = () =>{
      dispatch(asyncsignoutadmin(admin))
    }
        
    const [navbar, setnavbar] = useState(true)
    

    const OpenNavHandler = (e) => {
      e.preventDefault();
      const linksElement = document.querySelector(".links");
      const menuIcon = document.querySelector(".menuicon");
      const closingIcon = document.querySelector(".closingicon");

      // Remove any existing classes and styles
      linksElement.classList.remove("animate__fadeOutLeft");
      linksElement.style.display = "flex";

      // Apply the necessary classes and style for opening
      linksElement.classList.add("animate__fadeInLeft");

      // Update menu and closing icons
      menuIcon.style.display = "none";
      closingIcon.style.display = "initial";

      // Ensure the left property is reset for proper sliding in
      linksElement.style.left = "0%";
    };


    // ... (your existing code)

    const CloseNavHandler = (e) => {
      e.preventDefault();
      const linksElement = document.querySelector(".links");
      const menuIcon = document.querySelector(".menuicon");
      const closingIcon = document.querySelector(".closingicon");

      // Remove any existing classes and styles
      linksElement.classList.remove("animate__fadeInLeft");

      // Apply the necessary classes and style for closing
      linksElement.classList.add("animate__fadeOutLeft");

      // Update menu and closing icons
      menuIcon.style.display = "initial";
      closingIcon.style.display = "none";

      // After animation is complete, set the left property to -100%
      linksElement.addEventListener("animationend", () => {
        linksElement.style.left = "-100%";
        // linksElement.style.left = "0%";

        linksElement.classList.remove("animate__fadeOutLeft");

      }, { once: true });
      window.addEventListener('resize', () => {
        if (window.innerWidth > 780) {
          closingIcon.style.display = "none";
          linksElement.style.left = "0%";
        }
      });
    };

    window.addEventListener('resize', () => {
      const menuIcon = document.querySelector(".menuicon");
      const linksElement = document.querySelector(".links");

      // If the screen width is greater than 780px
      if (window.innerWidth > 780) {
        // Hide the menu icon
        linksElement.style.left = "0%";
        menuIcon.style.display = "none";
        
        // Display the links if it's not in the 'open' state
        if (!linksElement.classList.contains("open")) {
          linksElement.style.display = "flex";
        }
      } else {
        // Show the menu icon
        menuIcon.style.display = "initial";

        // Show or hide links based on the presence of the 'open' class
        if (!linksElement.classList.contains("open")) {
          linksElement.style.display = "none";
        }
      }
    });

    return <>
    <div className='nav'>
    <Link style={{textDecoration:"none" , color:"black"}} href="/"><h1 className="logo">Js<span>candid</span></h1></Link>
      {navbar ?
      <div className="links animate__animated">
      <Link className="link" href="/Content/stories">Stories</Link>
      <Link className="link" href="/Content/images">Images</Link>
      <Link className="link" href="/Content/prewedding">PreWeddings</Link>
      <Link className="link" href="/Content/trailer">Trailers</Link>
      <Link className="link" href="/Content/contact">Contact</Link>
      <Link className="link" href="/Content/aboutus">About us</Link>
      <div className='profilediv'>
          <div id="ptag">
            <p id="pp">MORE</p>
          </div>
            <div className="hidden-nav">
                <Link id="hiddenlink"  href="/Content/kids">baby & Kids </Link>
                {/* <Link id="hiddenlink"  href="/Content/maternity">Maternity</Link> */}
                <Link id="hiddenlink"  href="/Content/event">Events</Link>
                <Link id="hiddenlink"  href="/Content/fashion">Fashion & Commercial</Link>
                
                {
                  isAuthenticated && isAuthenticated  ?
                    <Link id="hiddenlink" onClick={SignOutHandler} href="">Sign Out</Link>
                  :
                  <Link id="hiddenlink"  href="/Content/signin">Sign in</Link>
                }

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