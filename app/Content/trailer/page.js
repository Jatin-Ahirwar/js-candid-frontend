"use client"
import Trailer from '@/Components/home/Trailer'
import { asyncaalltrailers } from '@/Store/Actions/TrailerActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const trailer = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(asyncaalltrailers())
  // } , [])

  return (
    <Trailer />
  )
}

export default trailer