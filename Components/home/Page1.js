"use client"
import React from 'react'
import '@/Components/home/page1.css'
import { useSelector } from 'react-redux'

const Page1 = () => {
  const { admin  , errors , isAuthenticated} = useSelector((state)=> state.AdminReducer)
  return <>
    <h3>{JSON.stringify(admin)}</h3>
    <h3>{JSON.stringify(errors)}</h3>
    <h3>{JSON.stringify(isAuthenticated)}</h3>
    <div className='page1'>

    </div>
  </>
}

export default Page1