"use client"
import Nav from '@/Components/home/Nav'
import { asynccurrentadmin } from '@/Store/Actions/AdminActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const layout = ({children}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asynccurrentadmin())
  },[])
  return <>        
      <Nav />
      {children}
  </>
}

export default layout