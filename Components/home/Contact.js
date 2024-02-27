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
    
    const validateContact = (contactNumber) => {
        // Validate contact number format (10 digits)
        const contactRegex = /^\d{10}$/;
        return contactRegex.test(contactNumber);
    };

    const ClientSubmitHandler = async (e) => {
          e.preventDefault();
          if (!validateContact(contact)) {
            toast.error("Please enter a valid 10-digit contact number");
            return;
          }
          // Email validation regex
          const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          // Validate email format
          if (!emailRegex.test(email)) {
            await toast.error("Please enter a valid email address");
            return;
          }
          const clientdetails = {
            eventdetails,
            eventtype,
            dates,
            venue,
            contact: contact.replace(/\D/g, ''),
            email: email.toLowerCase(),
            applicantname,
            bridename,
            groomname,
          };
          console.log(clientdetails)
          setLoading(true);
          await dispatch(asyncmail(clientdetails));
          setLoading(false)
          // Clearing textareas
          const textareas = document.getElementsByClassName('textarea');
          for (const textarea of textareas) {
            textarea.value = '';
        }
      
          // Clearing inputs
          const inputs = document.getElementsByClassName('input');
          for (const input of inputs) {
            input.value = '';
          }
          setcontact("")
        }

    return <>
    <div className='contactmaindiv animate__animated animate__fadeIn' >
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

                <div className="input-wrapper">
                    <label className="label">
                        CONTACT NUMBER <span> (required)</span>
                    </label>
                    <input
                        onChange={(e) => {
                        // Allow only digits and limit to 10 characters
                        const sanitizedContact = e.target.value.replace(/\D/g, "").substring(0, 10);
                        setcontact(sanitizedContact);
                        }}
                        className="input"
                        required
                        type="text"
                        value={contact}
                        maxLength={10}
                        minLength={10}
                    />
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

                <button type="submit" className="submitbtn" disabled={loading}>
                    {loading ? <p>Sending...</p> : <p>submit</p>}
                </button>
                {/* Display loading spinner if sending */}
                {loading && <Spin />}
                      
            </form>
            
        </div>
    </div>
  </>
}

export default Contact