"use client"
import Maternity from '@/Components/home/Maternity'
import { asyncaAllImages } from '@/Store/Actions/ImagesActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const maternity = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(asyncaAllImages())
  },[])

  return (
    <Maternity />
  )
}

export default maternity