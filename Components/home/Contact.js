'use client'
import React, { useEffect, useState } from 'react'
import "@/Components/home/Contact.css"
import { useDispatch } from 'react-redux'
import { asyncmail } from '@/Store/Actions/AdminActions'
import { toast } from 'react-toastify'
import Spin from './Spin'

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [eventdetails, seteventdetails] = useState("")
    const [eventtype, seteventtype] = useState("")
    const [dates, setdates] = useState("")
    const [venue, setvenue] = useState("")
    const [contact, setcontact] = useState("")
    const [email, setemail] = useState("")
    const [applicantname, setapplicantname] = useState("")
    const [bridename, setbridename] = useState("")
    const [groomname, setgroomname] = useState("")
    const dispatch = useDispatch()
    
    const ClientSubmitHandler = async (e) =>{
        try {
            e.preventDefault()
            const clientdetails = {
                eventdetails,
                eventtype,
                dates,
                venue,
                contact,
                email:email.toLowerCase(),
                applicantname,
                bridename,
                groomname
            }
            setLoading(true)
            await dispatch(asyncmail(clientdetails))
        } 
        catch (error) {
            toast.error(error)
        }
        finally{
            setLoading(false)
            toast.success("Mail Send Successfully")
            const textareas = document.getElementsByClassName('textarea');
            for (const textarea of textareas) {
              textarea.value = '';
            }
          
            // Clearing input values
            const inputs = document.getElementsByClassName('input');
            for (const input of inputs) {
              input.value = '';
            }        
        }
    }
    return <>
    <div className='contactmaindiv'>
        <div className='contacttopdiv'>
            <h2 style={{letterSpacing:"5px", textTransform:"uppercase"}}>Contact us</h2>
        </div>
        <div className='contactformdiv'>
            <h2 className='mandatory'>Mandatory Details</h2>
            <form onSubmit={ClientSubmitHandler} className='form'>
                <div className='input-wrapper'>
                    <label id='biglabels' className='label'>YOUR EVENT/WEDDING/FUNCTION DETAILS  <span> (required)</span></label>
                    <p style={{fontSize:"10px"}}>What are the tentative events / functions / timings per day </p>
                    <textarea onChange={(e)=>{seteventdetails(e.target.value)}} className='textarea'  required  type="text"></textarea>
                </div>
                
                <div className='input-wrapper'>
                    <label id='biglabels' className='label'>YOUR EVENT/WEDDING/FUNCTION DATES  <span> (required)</span></label>
                    <input onChange={(e)=>{setdates(e.target.value)}} className='input' required type="text" />
                </div>
                

                <div className='input-wrapper'>
                    <label id='biglabels' className='label'>YOUR EVENT/WEDDING/FUNCTION TYPE  <span> (required)</span></label>
                    <input onChange={(e)=>{seteventtype(e.target.value)}} className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>venue  <span> (required)</span></label>
                    <p style={{fontSize:"10px"}}>Please mention the hotel, city & the country</p>
                    <input onChange={(e)=>{setvenue(e.target.value)}} className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>CONTACT NUMBER  <span> (required)</span></label>
                    <input onChange={(e)=>{setcontact(e.target.value)}} className='input' required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>your email address  <span> (required)</span></label>
                    <input onChange={(e)=>{setemail(e.target.value)}} className='input' required type="email" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>applicant name  <span> (required)</span></label>
                    <input onChange={(e)=>{setapplicantname(e.target.value)}} className='input' required type="text" />
                </div>

                <div className='bgdiv'>
                    <div className='boxes'>
                        <label className='label'>Bride</label>
                        <input className='input' onChange={(e)=>{setbridename(e.target.value)}}  type="text" />
                    </div> 

                    <div className='boxes'>
                        <label className='label'>groom</label>
                        <input className='input' onChange={(e)=>{setgroomname(e.target.value)}} type="text" />
                    </div>  
                </div> 

                {/* <button type='submit' className='submitbtn'><p>submit</p></button>  */}
                <button type='submit' className='submitbtn' disabled={loading}>
                {loading ? <p>Sending...</p> : <p>submit</p>}
                </button> 
                {loading && (
                    <Spin/>
                )}

                      
            </form>
            
        </div>
    </div>
  </>
}

export default Contact