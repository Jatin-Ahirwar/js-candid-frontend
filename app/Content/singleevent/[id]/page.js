"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleEvent from '@/Components/home/SingleEvent'


const page = (props) => {
    const dispatch = useDispatch()
    const id = props.params.id
    useEffect(()=>{
        dispatch()
    },[])
    
    return <>
        <SingleEvent />
    </>
}

export default page