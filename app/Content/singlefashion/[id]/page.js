"use client"
import SingleFashion from '@/Components/home/SingleFashion'
import { asyncaSinglefashion } from '@/Store/Actions/FashionActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = (props) => {
    const id = props.params.id
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncaSinglefashion(id))
    },[])
    
    return (
        <SingleFashion />
    )
}

export default page