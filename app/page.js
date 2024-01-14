"use client"
import React, { useEffect, useRef } from 'react'
import Nav from '@/Components/home/Nav'
import Page1 from '@/Components/home/Page1'
import LocomotiveScroll from 'locomotive-scroll'

import gsap from "gsap"
import Page2 from '@/Components/home/Page2'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
  const locomotiveScroll = new LocomotiveScroll();
  }, [])
  

return <>
        <Nav />
        <Page1 />
      </>
}

export default page