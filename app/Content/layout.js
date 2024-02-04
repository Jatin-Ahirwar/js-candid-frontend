"use client"
import Nav from '@/Components/home/Nav'
import { asynccurrentadmin } from '@/Store/Actions/AdminActions'
import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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