"use client"
import Event  from '@/Components/home/Event.js'
import { asyncaallevents } from '@/Store/Actions/EventActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const event = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(asyncaallevents())
  } , [])

  return (
    <Event />
  )
}

export default event