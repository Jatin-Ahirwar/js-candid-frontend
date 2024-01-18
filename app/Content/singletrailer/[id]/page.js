"use client"
import SingleTrailer from '@/Components/home/SingleTrailer'
import { asyncaSingleTrailer } from '@/Store/Actions/TrailerActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = (props) => {
    const id = props.params.id
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncaSingleTrailer(id))
    },[])
    
    return (
        <SingleTrailer />
    )
}

export default page