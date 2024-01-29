"use client"
import Nav from '@/Components/home/Nav'
import { asynccurrentadmin } from '@/Store/Actions/AdminActions'
import { asyncaallevents } from '@/Store/Actions/EventActions'
import { asyncaallfashion } from '@/Store/Actions/FashionActions'
import { asyncaAllImages } from '@/Store/Actions/ImagesActions'
import { asyncaAllkidsImages } from '@/Store/Actions/KidsActions'
import { asyncaallprewedding } from '@/Store/Actions/PreweddingActions'
import { asyncaallstories } from '@/Store/Actions/StoriesActions'
import { asyncaalltrailers } from '@/Store/Actions/TrailerActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const layout = ({children}) => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(asynccurrentadmin())
  // },[])
  useEffect(()=>{
    dispatch(asynccurrentadmin())
    dispatch(asyncaAllImages())
    dispatch(asyncaallstories())
    dispatch(asyncaalltrailers())
    dispatch(asyncaallprewedding())
    dispatch(asyncaallevents())
    dispatch(asyncaallfashion())
    dispatch(asyncaAllkidsImages())
  },[])
  return <>        
      <Nav />
      {children}
  </>
}

export default layout