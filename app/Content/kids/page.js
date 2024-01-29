"use client"
import Kids from '@/Components/home/Kids'
import { asyncaAllkidsImages } from '@/Store/Actions/KidsActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const kids = () => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //     dispatch(asyncaAllkidsImages())
  // },[])

  return (
    <Kids />
  )
}

export default kids