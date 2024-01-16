"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const SingleStories = () => {
    const { singlestories } = useSelector((state)=>state.StoriesReducer)
  return (
    <div>
        <p>{JSON.stringify(singlestories)}</p>
    </div>
  )
}

export default SingleStories