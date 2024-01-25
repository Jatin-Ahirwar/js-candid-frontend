"use client"
import React, { useEffect, useState } from 'react'
import "@/Components/home/Prewed.css"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { asyncaallprewedding } from '@/Store/Actions/PreweddingActions'

const Prewed = () => {
    const [bridename, setbridename] = useState("")
    const [groomname, setgroomname] = useState("")
    const [date, setdate] = useState("")
    const [location, setlocation] = useState("")
    const [country, setcountry] = useState("")
    const [posterimage, setposterimage] = useState("")
    const [teaser, setteaser] = useState("")
    const [images, setimages] = useState([])

    const dispatch = useDispatch()
    const { preweddings } = useSelector((state)=>state.PreweddingReducer)
    useEffect(()=>{
        dispatch(asyncaallprewedding())
    } , [])

    const SubmitHandler = (e)=>{
        e.preventDefault()
        const prewedding = {
            bridename,
            groomname,
            date,
            location,
            country,
            images,
            posterimage,
            teaser
        }
        console.log(prewedding)
    }

    return <> 
    <div className='preweddingdiv'>
        {/* <p>{JSON.stringify(preweddings)}</p> */}
        <div className='preweddingtopdiv'>
            <h1 style={{letterSpacing:"5px"}}>Pre-Weddings</h1>
        </div>
        <div className='bottamline'></div>

        <div className='preweddingcontent'>
            {
                preweddings?.length >  0 ?
                preweddings?.map((prewed)=>(
                    <Link  style={{textDecoration:"none", color:"black"}} href={`/Content/singleprewedding/${prewed._id}`} className='preweddingproductdiv'>
                        <div className='coverimgdiv' >
                            <img className='coverimg' src="https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            {/* <img className='coverimg' src={`${process.env.NEXT_PUBLIC_BASE_URL}/${prewed.posterimage}`} alt="" /> */}
                        </div>
                        <div className='preweddingdetailsdiv'>
                            <h3 style={{textTransform:"uppercase"}}>{prewed.groomname} & {prewed.bridename}</h3> 
                            <p style={{fontFamily:"times",textTransform:"capitalize"}}>{prewed.location} , {prewed.country}</p> 
                            <h6 style={{fontWeight:"500",letterSpacing:"2px",textTransform:"uppercase"}}>Read More <i class="ri-arrow-right-line"></i></h6> 
                        </div>    
                    </Link>
                ))
                :
                <div className='notfounddiv'>
                    <h1>there is no prewedding's</h1>
                </div>
            }
            {/* <div id='createprewedding' className='preweddingproductdiv'> */}
            <div id='createprewedding' >
                <img src="../../stockimages/create.png" alt="" />
                <h2>Create Prewedding</h2>
            </div>
        </div>    

        <div className='preweddingoverlay'>
            <div className='preweddingformdiv'>
            <h2 className='mandatory'>Create Prewedding</h2>
            <form onSubmit={SubmitHandler} encType='multipart/form-data' className='form'>

                <div className='bgdiv'>
                    <div className='boxes'>
                    <label id='biglabels' className='label'>Bride Name  <span> (required)</span></label>
                        <input className='input' onChange={(e)=>setbridename(e.target.value)} required type="text" />
                    </div> 

                    <div className='boxes'>
                    <label id='biglabels' className='label'>Groom Name  <span> (required)</span></label>
                        <input className='input' onChange={(e)=>setgroomname(e.target.value)} required type="text" />
                    </div>  
                </div> 

                <div className='input-wrapper'>
                    <label className='label'>Location  <span> (required)</span></label>
                    <input className='input'onChange={(e)=>setlocation(e.target.value)} required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>Country <span> (required)</span></label>
                    <input className='input' onChange={(e)=>setcountry(e.target.value)} required type="text" />
                </div>

                <div className='input-wrapper'>
                    <label className='label'>Date <span> (required)</span></label>
                    <input className='input' onChange={(e)=>setdate(e.target.value)} required type="text" />
                </div>

                <div className='files-wrapper'>
                    <label className='label'>Teaser  <span> (required)</span></label>
                    <input required onChange={(e)=>setteaser(e.target.value)} type="file" />
                </div>
                
                <div className='files-wrapper'>
                    <label className='label'>Poster Image  <span> (required)</span></label>
                    <input onChange={(e)=>setposterimage(e.target.value)}  required type="file" />
                </div>

                <div   className='files-wrapper'>
                    <label className='label'>Images  <span> (required)</span></label>
                    <input  multiple required type="file" />
                </div>

                <button type='submit' className='submitbtn'><p>submit</p></button>       
            </form>
            
        </div>
                {/* <div className='formdiv'>
                    <form encType='multipart/form-data'>
                        <div></div>
                        <label>Bridename</label>
                        <input type="text" placeholder='Bride Name' />
                        
                        <label>Groomname</label>
                        <input type="text" placeholder='Groom Name' />
                        
                        <label>Date</label>
                        <input type="text" placeholder='Date' />
                        
                        <label>Location</label>
                        <input type="text" placeholder='Eg . Jaipur' />
                        
                        <label>Country</label>
                        <input type="text" placeholder='Eg . India' />
                        
                        <label>Teaser</label>
                        <input type="file"/>
                        
                        <label>Poster Image</label>
                        <input type="file"/>

                        <label>Images</label>
                        <input type="file" multiple/>

                        <input type="submit" />
                    </form>
                </div> */}
            </div>
    </div>
   </>

}

export default Prewed