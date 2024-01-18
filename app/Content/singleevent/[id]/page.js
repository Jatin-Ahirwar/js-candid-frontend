"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleEvent from '@/Components/home/SingleEvent'
import { asyncaSingleevent } from '@/Store/Actions/EventActions'


const page = (props) => {
    const dispatch = useDispatch()
    const id = props.params.id
    useEffect(()=>{
        dispatch(asyncaSingleevent(id))
    },[])
    
    return <>
        <SingleEvent />
    </>
}

export default page