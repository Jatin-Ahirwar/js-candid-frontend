"use client"
import Prewed from '@/Components/home/Prewed'
import { asyncaallprewedding } from '@/Store/Actions/PreweddingActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Prewedding = () => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(asyncaallprewedding())
  // } , [])

  return (
    <Prewed />
  )
}

export default Prewedding