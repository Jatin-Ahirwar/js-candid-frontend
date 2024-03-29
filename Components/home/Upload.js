"use client"
import React, { useEffect, useRef, useState } from 'react';
import "@/Components/home/Upload.css";
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateEvent, asyncCreateFashion, asyncCreatePrewedding, asyncCreateStories, asyncCreateTrailer, asyncuploadimages, asyncuploadkidsimages } from '@/Store/Actions/AdminActions';
import { toast } from 'react-toastify';
import Spin from './Spin';

const Upload = ({imageType}) => {
    const [Loading, setLoading] = useState(false);
    const [bridename, setbridename] = useState("");
    const [groomname, setgroomname] = useState("");
    const [modelname, setmodelname] = useState("");
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
        const newFiles = Array.from(e.target.files);
    
        // Check if any file is selected
        if (newFiles.length === 0) {
            setselectedfiles((prevFiles) => [...prevFiles]);
            return;
        }
    
        // Check the validity of each file individually
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/avif', 'image/webp'];        
        const invalidFiles = [];
    
        newFiles.forEach((file) => {
            if (!allowedTypes.includes(file.type)) {
                invalidFiles.push(file.name);
            }
        });
    
        if (invalidFiles.length > 0) {
            toast.error(`Invalid file type. Please select valid file types for: ${invalidFiles.join(', ')}.`);
            setselectedfiles((prevFiles) => [...prevFiles]);
            return;
        }
    
        setselectedfiles((prevFiles) => [...prevFiles, ...newFiles]);
    };
            
    const handlePosterChange = (e) => {
        const files = e.target.files;

        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/avif', 'image/webp'];
        const isImageFile = allowedTypes.includes(files[0].type);

        if (!isImageFile) {
            toast.error("Invalid file type. Please select a valid Image file type PNG , JPG , JPEG , SVG , AVIF , WEBP.");
            setselectedteaser("");
            return;
        }

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

    const TrailerHandler = async (e) => {
        e.preventDefault();

        if (!trailerposter.length) {
            toast.error('Please select poster to upload.');
            return;
        }
        if (!trailervideo.length) {
            toast.error('Please select teaser to upload.');
            return;
        }
    
        const content = {
            groomname,
            bridename,
            date,
            country,
            location,
            venue,
            title
        };
        
        setLoading(true);
    
        if (isAuthenticated) {
            const formData = new FormData();
    
            // Append text data to formData
            Object.entries(content).forEach(([key, value]) => {
                formData.append(key, value);
            });
    
            // Append files to formData
            if(imageType === 'trailer'){
                formData.append('trailerposter', trailerposter[0]);
                formData.append('trailervideo', trailervideo[0]);
            }
            else if(imageType === "stories"){
                formData.append('posterimage', trailerposter[0]);
                formData.append('teaser', trailervideo[0]);
            }
    
            if (imageType === 'trailer') {
                await dispatch(asyncCreateTrailer(formData));
            }
            else if(imageType === "stories"){
                await dispatch(asyncCreateStories(formData));
            }

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
    
    const PreweddingHandler = async (e) => {
        e.preventDefault();

        if (!trailerposter.length ) {
            toast.error('Please select poster to upload.');
            return;
        }

        if (!trailervideo.length) {
            toast.error('Please select teaser to upload.');
            return;
        }
        if (!selectedfiles.length) {
            toast.error('Please select images to upload.');
            return;
        }
    
        const content = {
            groomname,
            bridename,
            date,
            country,
            location,
        };
    
        setLoading(true);
    
        if (isAuthenticated) {
            const formData = new FormData();
    
            // Append text data to formData
            Object.entries(content).forEach(([key, value]) => {
                formData.append(key, value);
            });
    
            // Append files to formData
            formData.append('posterimage', trailerposter[0]);
            formData.append('teaser', trailervideo[0]);
            for (const file of selectedfiles) {
                formData.append('images', file);
            }    

            if (imageType === 'trailer') {
                await dispatch(asyncCreateTrailer(formData));
            }
            else if (imageType === 'prewedding') {
                await dispatch(asyncCreatePrewedding(formData));
            }
            // Add other conditions for different image types if needed
        } else {
            toast.error("Please log in to access the resource !");
        }
    
        setLoading(false);
    
        // Clear the selected files and reset the file input
        setselectedfiles([]);
        fileInputRef.current.value = '';
        setIsVisible(false);
    };

    const FashionEventHandler = async (e) => {
        e.preventDefault();

        if (!trailerposter.length ) {
            toast.error('Please select poster to upload.');
            return;
        }

        if (!trailervideo.length) {
            toast.error('Please select teaser to upload.');
            return;
        }

        if (!selectedfiles.length) {
            toast.error('Please select images to upload.');
            return;
        }
    
        const content = {
            modelname,
            country,
            location,
        };
    
        setLoading(true);
    
        if (isAuthenticated) {
            const formData = new FormData();
    
            // Append text data to formData
            Object.entries(content).forEach(([key, value]) => {
                formData.append(key, value);
            });
    
            // Append files to formData
            formData.append('posterimage', trailerposter[0]);
            formData.append('teaser', trailervideo[0]);
            for (const file of selectedfiles) {
                formData.append('images', file);
            }    

            if (imageType === 'event') {
                await dispatch(asyncCreateEvent(formData));
            }
            else if (imageType === 'fashion') {
                await dispatch(asyncCreateFashion(formData));
            }
            // Add other conditions for different image types if needed
        } else {
            toast.error("Please log in to access the resource !");
        }
    
        setLoading(false);
    
        // Clear the selected files and reset the file input
        setselectedfiles([]);
        fileInputRef.current.value = '';
        setIsVisible(false);
    };

    const handleClose = () => {
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
                        <h3 style={{textTransform:"capitalize"}}>Create {imageType && imageType}</h3>
                        <img className='closeeicon' onClick={handleClose} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>

                    <div className='uploadcenterdiv'>                        
                        <div className="uploadleft">

                            {
                                imageType === "trailer" || imageType === "prewedding"  || imageType === "stories"?
                                
                                <>
                                <div className='upload-input-wrapper'>
                                    <label className='label'>Groom Name<span> (required)</span></label>
                                    <input onChange={(e)=>{setgroomname(e.target.value)}} className='input' required type="text" />
                                </div>

                                <div className='upload-input-wrapper'>
                                    <label className='label'>bride Name<span> (required)</span></label>
                                    <input onChange={(e)=>{setbridename(e.target.value)}} className='input' required type="text" />
                                </div>

                                <div className='upload-input-wrapper'>
                                    <label className='label'>Date<span> (required)</span></label>
                                    <input onChange={(e)=>{setdate(e.target.value)}} className='input' required type="text" />
                                </div>
                                </>

                                :
                                
                                imageType === "event" || imageType === "fashion" ?
                                <div className='upload-input-wrapper'>
                                    <label className='label'>Model Name<span> (required)</span></label>
                                    <input onChange={(e)=>{setmodelname(e.target.value)}} className='input' required type="text" />
                                </div>
                                :
                                null
                            }
                                                        

                            <div className='upload-input-wrapper'>
                                <label className='label'>location<span> (required)</span></label>
                                <input onChange={(e)=>{setlocation(e.target.value)}} className='input' required type="text" />
                            </div>

                            {
                                imageType != "stories" ?
                                    <div className='upload-input-wrapper'>
                                        <label className='label'>Country<span> (required)</span></label>
                                        <input onChange={(e)=>{setcountry(e.target.value)}} className='input' required type="text" />
                                    </div>                                
                                :
                                null
                            }


                            {
                                imageType === "stories" ?
                                <>
                                    <div className='upload-input-wrapper'>
                                        <label className='label'>Venue<span> (required)</span></label>
                                        <input onChange={(e)=>{setvenue(e.target.value)}} className='input' required type="text" />
                                    </div>

                                    <div className='upload-input-wrapper'>
                                        <label className='label'>title<span> (required)</span></label>
                                        <input onChange={(e)=>{settitle(e.target.value)}} className='input' required type="text" />
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
                                {
                                    imageType === "trailer" ?
                                        <h3>Upload Trailer Video</h3>
                                    :
                                    <h3>Upload Teaser Video</h3>
                                }
                                
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
                                imageType != "trailer" && imageType != "stories"   ?
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
                        {
                            imageType === "prewedding" ?
                            <button onClick={PreweddingHandler} disabled={Loading}>
                                {Loading ? 'Uploading...' : 'Upload'}
                            </button>
                            :
                            imageType === "trailer" || imageType === "stories"?
                            <button onClick={TrailerHandler} disabled={Loading}>
                                {Loading ? 'Uploading...' : 'Upload'}
                            </button>
                            :
                            imageType === "event" || imageType === "fashion"  ?
                            <button onClick={FashionEventHandler} disabled={Loading}>
                                {Loading ? 'Uploading...' : 'Upload'}
                            </button>
                            :
                            imageType === "stories" ?
                            <button onClick={StoriesHandler} disabled={Loading}>
                                {Loading ? 'Uploading...' : 'Upload'}
                            </button>
                            :
                            null
                        }
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






