"use client"
import React, { useEffect, useRef, useState } from 'react';
import "@/Components/home/Upload.css";
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateTrailer, asyncuploadimages, asyncuploadkidsimages } from '@/Store/Actions/AdminActions';
import { toast } from 'react-toastify';
import Spin from './Spin';

const Upload = ({imageType}) => {
    const [Loading, setLoading] = useState(false);
    const [bridename, setbridename] = useState("");
    const [groomname, setgroomname] = useState("");
    const [date, setdate] = useState("");
    const [location, setlocation] = useState("");
    const [country, setcountry] = useState("");
    const [venue, setvenue] = useState("");
    const [title, settitle] = useState("");
    const [IsVisible, setIsVisible] = useState(true);
    const [selectedfiles, setselectedfiles] = useState([]);
    const [trailerposter, setselectedposter] = useState("");
    const [trailervideo, setselectedteaser] = useState("");
    const { isAuthenticated } = useSelector((state) => state.AdminReducer);
    const fileInputRef = useRef(null);
    const posterInputRef = useRef(null);
    const teaserInputRef = useRef(null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        console.log(imageType)
    },[])
    
    const handleFileChange = (e) => {
        const newFiles = e.target.files;
        setselectedfiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    };

    const handlePosterChange = (e) => {
        const files = e.target.files;
        setselectedposter(files);
    };

    const handleTeaserChange = (e) => {
        const files = e.target.files;

        // Check if any file is selected
        if (files.length === 0) {
            setselectedteaser("");
            return;
        }

        // Check if the selected file is a video file (you can adjust the allowed file types as needed)
        const allowedTypes = ["video/mp4"];
        const isVideoFile = allowedTypes.includes(files[0].type);

        if (!isVideoFile) {
            toast.error("Invalid file type. Please select a valid video file type (MP4).");
            setselectedteaser("");
            return;
        }

        setselectedteaser(files);
    };
    
    const handleBoxMainClick = () => {
        if(isAuthenticated){
            if (fileInputRef && fileInputRef.current) {
                fileInputRef && fileInputRef.current.click();
            }
        }
        else{
            toast.error("Please login to access the resource !")
        }
    };

    const handleposterClick = () => {
        if(isAuthenticated){
            if (posterInputRef && posterInputRef.current) {
                posterInputRef && posterInputRef.current.click();
            }
        }
        else{
            toast.error("Please login to access the resource !")
        }
    };

    const handleteaserClick = () => {
        if(isAuthenticated){
            if (teaserInputRef && teaserInputRef.current) {
                teaserInputRef && teaserInputRef.current.click();
            }
        }
        else{
            toast.error("Please login to access the resource !")
        }
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedfiles];
        updatedFiles.splice(index, 1);
        setselectedfiles(updatedFiles);
    };

    const UploadContent = async (e) => {
        e.preventDefault();
        // if (!selectedfiles.length) {
        //     toast.error('Please select files to upload.');
        //     return;
        // }
        if (!trailerposter.length) {
            toast.error('Please select poster to upload.');
            return;
        }
        if (!trailervideo.length) {
            toast.error('Please select teaser to upload.');
            return;
        }

        // const Images = new FormData();
        // for (const file of selectedfiles) {
        //     Images.append('images', file);
        // }

        const Content = {
            groomname,
            bridename,
            date,
            country,
            location,
            trailerposter,
            trailervideo
        }

        setLoading(true);

        if (isAuthenticated) {
            if (imageType === 'trailer') {
                console.log(Content)
                await dispatch(asyncCreateTrailer(Content));
            }
            // else if (imageType === 'prewedding') {
            //     await dispatch(asyncuploadimages(content));
            // }
            }
            else {
                toast.error("Please log in to access the resource !");
            }

        setLoading(false);
        // Clear the selected files and reset the file input
        setselectedfiles([]);
        fileInputRef.current.value = '';
        setIsVisible(false);
    };

    const handleClose = () => {
        // Hide the component and clear selected files
        setIsVisible(false);
        setselectedfiles([]);
        setselectedposter("")
        setselectedteaser("")
        
    };

    if (!IsVisible) {
        return null; // Render nothing when the component is not visible
    }

    return (
        <>
            <div className="overlayy">
                <div className='upload'>
                    <div className='closingwrapper'>
                        {
                            imageType === "trailer" ?
                            <h3>Upload Trailer</h3>
                            :
                            ""
                        }
                        <img className='closeeicon' onClick={handleClose} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>

                    <div className='uploadcenterdiv'>                        
                        
                        <div className="uploadleft">
                            
                            <div className='upload-input-wrapper'>
                                <label className='label'>Groom Name<span> (required)</span></label>
                                <input onChange={(e)=>{setgroomname(e.target.value)}} className='input' required type="email" />
                            </div>

                            <div className='upload-input-wrapper'>
                                <label className='label'>bride Name<span> (required)</span></label>
                                <input onChange={(e)=>{setbridename(e.target.value)}} className='input' required type="email" />
                            </div>

                            <div className='upload-input-wrapper'>
                                <label className='label'>Date<span> (required)</span></label>
                                <input onChange={(e)=>{setdate(e.target.value)}} className='input' required type="email" />
                            </div>

                            <div className='upload-input-wrapper'>
                                <label className='label'>location<span> (required)</span></label>
                                <input onChange={(e)=>{setlocation(e.target.value)}} className='input' required type="email" />
                            </div>

                            <div className='upload-input-wrapper'>
                                <label className='label'>Country<span> (required)</span></label>
                                <input onChange={(e)=>{setcountry(e.target.value)}} className='input' required type="email" />
                            </div>

                            {
                                imageType === "stories" ?
                                <>
                                    <div className='upload-input-wrapper'>
                                        <label className='label'>Venue<span> (required)</span></label>
                                        <input onChange={(e)=>{setvenue(e.target.value)}} className='input' required type="email" />
                                    </div>

                                    <div className='upload-input-wrapper'>
                                        <label className='label'>title<span> (required)</span></label>
                                        <input onChange={(e)=>{settitle(e.target.value)}} className='input' required type="email" />
                                    </div>
                                </>
                                :
                                ""
                            }
                        </div>

                        <div className="uploadright">

                            <div className='uploadmain' onClick={handleposterClick}>
                                <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                                <h3>Upload Poster Image</h3>
                            </div>                  
                      
                            {trailerposter && (
                                <div className='files' >
                                    <h3 style={{ fontWeight: "500" }}>{trailerposter[0].name}</h3>
                                    <img
                                        className='removefile'
                                        src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png"
                                        alt=""
                                        onClick={() => setselectedposter("")} // Handle removal as needed
                                    />
                                </div>
                            )}

                            <div className='uploadmain' onClick={handleteaserClick}>
                                <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                                <h3>Upload Trailer Video</h3>
                            </div>

                            {trailervideo && (
                                <div className='files' >
                                    <h3 style={{ fontWeight: "500" }}>{trailervideo[0].name}</h3>
                                    <img
                                        className='removefile'
                                        src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png"
                                        alt=""
                                        onClick={() => setselectedteaser("")} // Handle removal as needed
                                    />
                                </div>
                            )}    

                            {
                                imageType != "trailer" 
                                ?
                                <>
                                    <div className='uploadmain' onClick={handleBoxMainClick}>
                                        <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                                        <h3>Upload Images</h3>
                                    </div>                  
                                    <div className='btmline'></div>
                                    <div className='filesdiv'>
                                            {
                                                selectedfiles?.map((file, index) => (
                                                    <div className='files' key={index}>
                                                        <h3 style={{fontWeight:"500"}}>{file.name}</h3>
                                                        <img
                                                            className='removefile'
                                                            src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png"
                                                            alt=""
                                                            onClick={() => handleRemoveFile(index)}
                                                        />
                                                    </div>
                                                ))
                                            }
                                            {
                                                selectedfiles.length === 0 ? 
                                                    <div className='files'>
                                                        <h3 style={{fontWeight:"500"}}>No Images Selected</h3>
                                                    </div>
                                                
                                                : 
                                                ""
                                            }
                                            
                                    </div>
                                </>
                                :
                                ""
                            }
                  
                        </div>
                        {
                            isAuthenticated && (
                                <div  className='uploading'>
                                    <input type="file" id="fileInputtt" onChange={handlePosterChange} ref={posterInputRef} style={{ display: 'none' }} />
                                </div>
                            )
                        }

                        {
                            isAuthenticated && (
                                <div  className='uploading'>
                                    <input type="file" id="fileInputtt" onChange={handleTeaserChange} ref={teaserInputRef} style={{ display: 'none' }} />
                                </div>
                            )
                        }

                        {
                            isAuthenticated && (
                                <div  className='uploading'>
                                    <input type="file" id="fileInputtt" onChange={handleFileChange} multiple ref={fileInputRef} style={{ display: 'none' }} />
                                </div>
                            )
                        }
                    </div>
                    
                    <div className='btn'>
                        <button onClick={UploadContent} disabled={Loading}>
                            {Loading ? 'Uploading...' : 'Upload'}
                        </button>
                        {Loading && (
                            <Spin/>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Upload;






