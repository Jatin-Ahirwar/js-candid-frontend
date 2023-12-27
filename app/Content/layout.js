"use client"
import Nav from '@/Components/home/Nav'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'


const layout = ({children}) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  return <>
    <Nav />
    {children}
  </>
}

export default layout