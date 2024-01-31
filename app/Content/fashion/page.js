"use client"
import Fashion from '@/Components/home/Fashion'
import { asyncaallfashion } from '@/Store/Actions/FashionActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const fashion = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(asyncaallfashion())
  } , [])

  return (
    <Fashion />
  )
}

export default fashion