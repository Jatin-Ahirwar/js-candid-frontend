"use client"
import Nav from '@/Components/home/Nav'
import React from 'react'

const layout = ({children}) => {
  return <>        
      <Nav />
      {children}
  </>
}

export default layout