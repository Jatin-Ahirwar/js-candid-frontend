"use client"
import Singleimage from '@/Components/home/Singleimage'
import { asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = (props) => {
    const [imageindex, setimageindex] = useState("")
    const dispatch = useDispatch()
    const index = props.params.index

    useEffect(()=>{
        dispatch(asyncaSingleImage(index))
        setimageindex(index)
    },[])
    return (
        <Singleimage />
    )
}

export default page