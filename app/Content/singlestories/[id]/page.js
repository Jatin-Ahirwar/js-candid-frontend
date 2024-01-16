"use client"
import SingleStories from '@/Components/home/SingleStories'
import { asyncaSinglestories } from '@/Store/Actions/StoriesActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = (props) => {
    const id = props.params.id
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(asyncaSinglestories(id))
    },[])
    
    return (
        <SingleStories />
    )
}

export default page