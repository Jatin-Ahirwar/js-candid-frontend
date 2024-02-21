"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { asyncDeleteImage } from '@/Store/Actions/AdminActions'; // Replace with your actual delete action
import Spin from './Spin';
import "@/Components/home/Confirmation.css"
import { asyncDeletePreweddingImage, asyncdeleteevent, asyncdeleteeventimage, asyncdeletefashion, asyncdeletefashionimage, asyncdeleteimages, asyncdeletekidsimages, asyncdeleteprewedding, asyncdeletetrailer } from '@/Store/Actions/AdminActions';

const ConfirmationModal = ({ imageType , imageIndex , preweddingId,  trailerId , eventId , fashionId }) => {
    const { isAuthenticated } = useSelector((state) => state.AdminReducer);
    const [IsVisible, setIsVisible] = useState(true);
    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log(imageType,imageIndex,trailerId,preweddingId,eventId,fashionId)
    }, [])
    
    const handleClose = () => {
        setIsVisible(false);
    };

    const handleDelete = async () => {
        setLoading(true);

        if (isAuthenticated) {
            if(imageType === "deletepreweddingimage"){
                await dispatch(asyncDeletePreweddingImage(preweddingId,imageIndex));
            }
            else if(imageType === "deleteprewedding"){
                await dispatch(asyncdeleteprewedding(preweddingId));
            }
            else if(imageType === "deleteimage"){
                await dispatch(asyncdeleteimages(imageIndex));
            }
            else if(imageType === "deletekidsimage"){
                await dispatch(asyncdeletekidsimages(imageIndex));
            }
            else if(imageType === "deletetrailer"){
                await dispatch(asyncdeletetrailer(trailerId));
            }
            else if(imageType === "deleteeventimage"){
                await dispatch(asyncdeleteeventimage(eventId,imageIndex));
            }
            else if(imageType === "deleteevent"){
                await dispatch(asyncdeleteevent(eventId));
            }
            else if(imageType === "deletefashionimage"){
                await dispatch(asyncdeletefashionimage(fashionId,imageIndex));
            }
            else if(imageType === "deletefashion"){
                await dispatch(asyncdeletefashion(fashionId));
            }


        }

        setLoading(false);
        handleClose();
    };

    if (!IsVisible) {
        return null;
    }

    return (
        <div className="confirmation-modal">
            <div className='confirm-boxx'>
                <div className='closingwrapperrr'>
                    <img className='closeeiconnn' onClick={handleClose} src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                </div>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this image?</p>
                <div className='deletebtn'>
                    <button className='deletebutton' onClick={handleDelete} disabled={loading}>
                        {loading ? 'Deleting...' : 'Delete'}
                    </button>
                    {loading && <Spin />}
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
