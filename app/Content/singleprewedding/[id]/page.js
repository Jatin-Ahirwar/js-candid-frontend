"use client"
import SinglePrewed from '@/Components/home/SinglePrewed'
import { asyncaSingleprewedding } from '@/Store/Actions/PreweddingActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = (props) => {
    const id = props.params.id
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(asyncaSingleprewedding(id))
    },[])
    
    return (
        <SinglePrewed />
    )
}

export default page