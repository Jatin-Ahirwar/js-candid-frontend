"use client"
import React from 'react'
import '@/Components/home/Footer.css'
import Link from 'next/link'
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footercenter">
          <Link href="https://www.instagram.com/jscandid2023/">
            <FaSquareInstagram className='insta' style={{color:"black"}}/>  
          </Link>          
          <h4>JS CANDID © 2024</h4>
        </div>
    </div>
  )
}

export default Footer