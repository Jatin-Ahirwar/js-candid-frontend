"use client"
import Stories from '@/Components/home/Stories'
import { asyncaallstories } from '@/Store/Actions/StoriesActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const stories = () => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(asyncaallstories())
  // } , [])

  return <>
    <Stories />
  </>
  
}

export default stories