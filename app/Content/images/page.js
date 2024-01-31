"use client"
import Images from '@/Components/home/Images'
import { asyncaAllImages } from '@/Store/Actions/ImagesActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const images = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncaAllImages())  
  }, [])
  
  return (
    <Images />
  )
}

export default images