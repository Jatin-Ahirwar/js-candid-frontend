"use client"
import React, { useEffect, useRef, useState } from 'react';
import "@/Components/home/UploadPost.css";
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateStoriesFunction, asyncUpdateStoriesFunction, asyncuploadimages, asyncuploadkidsimages } from '@/Store/Actions/AdminActions';
import { toast } from 'react-toastify';
import Spin from './Spin';

const UploadPost = ({imageType,storyId,functionId}) => {
    const { isAuthenticated } = useSelector((state) => state.AdminReducer);
    const [functionname, setfunctionName] = useState("");
    const [isFunctionNameVisible, setIsFunctionNameVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [IsVisible, setIsVisible] = useState(true);
    const [selectedfiles, setselectedfiles] = useState([]);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(imageType,storyId,functionId)
    },[])

    const HandlerFunctionName = (e) => {
        if (e.key === "Enter" && functionname.trim() !== "") {
          setIsFunctionNameVisible(true);
          setIsEditMode(false);
        }
    };

    const handleEditClick = () => {
        setIsEditMode(true);
        setIsFunctionNameVisible(false);
    };

    const handleFileChange = (e) => {
        const newFiles = e.target.files;
        setselectedfiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    };
    
    const handleBoxMainClick = () => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef && fileInputRef.current.click();
        }
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedfiles];
        updatedFiles.splice(index, 1);
        setselectedfiles(updatedFiles);
    };

    const ImagesUpload = async (e) => {
        e.preventDefault();
        if (!selectedfiles.length) {
            alert('Please select files to upload.');
            return;
        }

        const content = {
            functionname
        };

        const Images = new FormData();
        
        if(imageType === "storyfunction"){
            Object.entries(content).forEach(([key, value]) => {
                Images.append(key, value);
            });
        }
        
        for (const file of selectedfiles) {
            Images.append('images', file);
        }
        
        setLoading(true);
        // Assuming asyncuploadkidsimages is a placeholder for your actual action
        if (isAuthenticated) {
            if (imageType === 'kids') {
                await dispatch(asyncuploadkidsimages(Images));
            } 
            else if (imageType === 'images') {
                await dispatch(asyncuploadimages(Images));
            }
            else if (imageType === 'storyfunction') {
                await dispatch(asyncCreateStoriesFunction(Images,storyId));
            }
            else if (imageType === 'functionimages') {
                // console.log(...Images.entries())
                await dispatch(asyncUpdateStoriesFunction(Images,functionId,storyId));
            }
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
        // Hide the component and clear selected files
        setIsVisible(false);
        setselectedfiles([]);
    };

    if (!IsVisible) {
        return null; // Render nothing when the component is not visible
    }

    return (
        <>
            <div className="overlayy">
                <div className='boxx'>
                    <div className='closingwrapper'>
                        <img className='closeeicon' onClick={handleClose} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    </div>

            {imageType === "storyfunction" && !isFunctionNameVisible && !isEditMode ? (
                        <div className="stories-input-wrapper">
                        <label className="label">
                            Function Name<span> (required)</span>
                        </label>
                        <input
                            onKeyDown={HandlerFunctionName}
                            onChange={(e) => {
                            setfunctionName(e.target.value);
                            }}
                            className="input"
                            required
                            type="text"
                        />
                        </div>
                    ) : null}

                    {isFunctionNameVisible && !isEditMode ? (
                        <>
                        <h2 className="functionname">{functionname}</h2>
                        <span onClick={handleEditClick} style={{cursor:"pointer"}} className="edit-option">
                            Edit
                        </span>
                        </>
                    ) : (
                        null
                    )}

                    {isEditMode && (
                        <div className="stories-input-wrapper">
                        <label className="label">
                            Function Name<span> (required)</span>
                        </label>
                        <input
                            onKeyDown={HandlerFunctionName}
                            onChange={(e) => {
                            setfunctionName(e.target.value);
                            }}
                            value={functionname}
                            className="input"
                            required
                            type="text"
                        />
                        </div>
                    )}                    
                    
                    <div className='boxxmain' onClick={handleBoxMainClick}>
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
                    {
                        isAuthenticated && (
                            <div  className='uploading'>
                                <input type="file" id="fileInputtt" onChange={handleFileChange} multiple ref={fileInputRef} style={{ display: 'none' }} />
                            </div>
                        )
                    }
                    <div className='btn'>
                        <button onClick={ImagesUpload} disabled={Loading}>
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

export default UploadPost;






