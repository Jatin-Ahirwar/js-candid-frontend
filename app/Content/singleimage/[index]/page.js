"use client"
import Singleimage from '@/Components/home/Singleimage'
import { asyncaSingleImage } from '@/Store/Actions/ImagesActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = (props) => {
    const dispatch = useDispatch()
    const index = props.params.index

    useEffect(()=>{
        dispatch(asyncaSingleImage(index))
    },[])
    return (
        <Singleimage />
    )
}

export default page