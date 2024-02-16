"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/Signin.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncsigninadmin } from '@/Store/Actions/AdminActions'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { removeerror } from '@/Store/Reducers/AdminReducer'


const Signin = () => {
  const router = useRouter()
  const { admin , isAuthenticated , errors } = useSelector((state)=>state.AdminReducer)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()

  const submitHandler =async (e)=>{
    e.preventDefault()
    const admin = {
      email,
      password
    }
    document.querySelector(".signinput").value = ""
    document.querySelector("#pass").value = ""
    await dispatch(asyncsigninadmin(admin))
  }
  
  useEffect(() => {
    if(isAuthenticated){
      // alert("you are logged in !")
      router.push("/Content/stories")
    }
  },[isAuthenticated])  

  return (
    <div className='signinmaindiv'>
        <div className='signintopdiv'>
            <h1 style={{letterSpacing:"5px"}}>SIGN IN</h1>
        </div> 
        <div className='signincontentwrapper'>
            <div className='signincontent'>
              <form onSubmit={submitHandler} className='signinform'>
                  <div className='signinput-wrapper'>
                        <label className='signinlabel'>EMAIL<span> (required)</span></label>
                        <input className='signinput' onChange={(e)=> setemail(e.target.value)} required type="text" />
                  </div>

                  <div className='signinput-wrapper'>
                        <label className='signinlabel'>PASSWORD<span> (required)</span></label>
                        <input className='signinput' id='pass'  onChange={(e)=> setpassword(e.target.value)} required type="password" />
                  </div>

                  <button type='submit' className='signinbtn'><p>submit</p></button>       

              </form>
            </div>
        </div>
    </div>
  )
}

export default Signin