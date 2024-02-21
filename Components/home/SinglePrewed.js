"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "@/Components/home/SinglePrewed.css"
import UploadPost from './UploadPost'
import "@/Components/home/SinglePrewed.css";
import ConfirmationModal from './Confirmation';


const SinglePrewed = () => {
    const { singleprewedding } = useSelector((state)=>state.PreweddingReducer)
    const { isAuthenticated } = useSelector((state)=>state.AdminReducer)
    const [UploadPostVisible, setUploadPostVisible] = useState(false)
    const [DeleteImageVisible, setDeleteImageVisible] = useState(false)
    const [imageType, setimageType] = useState("")
    const [imageIndex, setimageIndex] = useState("")

    const handleCreateIconClick = (imageType) => {
        setUploadPostVisible(prevValue => !prevValue);
        setimageType(imageType)
    };

    const handleDeleteIconClick = (index,imageType) => {
        setDeleteImageVisible(prevValue => !prevValue);
        setimageType(imageType)
        setimageIndex(index)
        console.log(index,imageType)
    };
    
    return (
    <div className='singleitemwrapper'>
        {UploadPostVisible && <UploadPost imageType={imageType} preweddingId={singleprewedding?._id}/>}
        {DeleteImageVisible && <ConfirmationModal  imageType={imageType} preweddingId={singleprewedding?._id} imageIndex={imageIndex} />}

        {/* <p>{JSON.stringify(singleprewedding)}</p> */}
        <div className='storytopdiv'>
            <h2>{singleprewedding?.groomname} & {singleprewedding?.bridename}</h2>
            <p>{singleprewedding?.date} | {singleprewedding?.location} , {singleprewedding?.country}</p>
        </div>
        <div className='bestpic'>
            <img src={singleprewedding?.posterimage.url} alt="" />
        </div>

        <div className='functionswrapper'>    
                <h3>IMAGES</h3>
            
            {
               singleprewedding?.images.length > 0 ?
                
                singleprewedding?.images.map((image, index) => (
                    <div className='functionimage' key={index}>
                        {isAuthenticated ? 
                            <div className='deletewrapper'>
                            <img 
                                onClick={() => handleDeleteIconClick(index,"deletepreweddingimage")} 
                                className='deleteimageicon' 
                                src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" 
                                alt="" 
                            />
                            </div>
                            : null
                        }
                        <img src={image.url} alt={`${image}`} />
                    </div>
                ))                
                : "THERE IS NO IMAGES "
            }
        </div>
        {
            isAuthenticated ?
                // <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick(storiesfunction._id,"functionimages")}>
                <div className='createfunctiondiv' style={{width:"22vw",border:"none"}} onClick={() => handleCreateIconClick("singleprewedimages")}>
                    <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
                    <h3>Upload More Images</h3>
                </div>
            :
            null
        }    


        {
            // singleprewedding?.teaser.length > 0 ? 
            singleprewedding?.teaser ? 
            <>    
            <h3 id='teasername'>TEASER</h3>
            <div style={{margin:"3vh 0"}} className='storiestrailer'>
                <i id='play' class="ri-play-fill"></i>
                <video src={singleprewedding?.teaser.url}></video>
            </div>
               
            </>

            : ""

        }    

    </div>
  )
}

export default SinglePrewed




// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import "@/Components/home/SinglePrewed.css";
// import UploadPost from './UploadPost';
// import ConfirmationModal from './Confirmation';

// const SinglePrewed = () => {
//     const { singleprewedding } = useSelector((state) => state.PreweddingReducer);
//     const { isAuthenticated } = useSelector((state) => state.AdminReducer);
//     const [UploadPostVisible, setUploadPostVisible] = useState(false);
//     const [imageType, setimageType] = useState("");
//     const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//     const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

//     const handleCreateIconClick = (imageType) => {
//         setUploadPostVisible(true);
//         setimageType(imageType);
//     };

//     const handleDeleteImage = () => {
//         // Perform delete operation here using the selectedImageIndex
//         // After deletion, you may want to refresh the component or update the state accordingly
//         console.log(`Deleting image at index: ${selectedImageIndex}`);
//         setSelectedImageIndex(null); // Reset selectedImageIndex after deletion
//         closeConfirmationModal();
//     };

//     const handleImageClick = (imageIndex) => {
//         setSelectedImageIndex(imageIndex);
//         console.log(imageIndex)
//         openConfirmationModal();
//     };

//     const openConfirmationModal = () => {
//         setIsConfirmationModalOpen(true);
//     };

//     const closeConfirmationModal = () => {
//         setIsConfirmationModalOpen(false);
//     };

//     return (
//         <div className='singleitemwrapper'>
//             {UploadPostVisible && <UploadPost imageType={imageType} preweddingId={singleprewedding?._id} />}

//             {/* ... (existing code) */}
//             <div className='storytopdiv'>
//                 <h2>{singleprewedding?.groomname} & {singleprewedding?.bridename}</h2>
//                 <p>{singleprewedding?.date} | {singleprewedding?.location} , {singleprewedding?.country}</p>
//             </div>
//             <div className='bestpic'>
//                 <img src={singleprewedding?.posterimage.url} alt="" />
//             </div>
//             <div className='functionswrapper'>
//                 <h3>IMAGES</h3>
//                 {singleprewedding?.images.length > 0 ?
//                     singleprewedding?.images.map((image, index) => (
//                         <div className='functionimage' key={image.id}>
//                             <img
//                                 src={image.url}
//                                 alt={`${image}`}
//                                 onClick={() => handleImageClick(index)}
//                             />
//                             {isAuthenticated && (
//                                 <button onClick={() => handleImageClick(index)}>
//                                     Delete
//                                 </button>
//                             )}
//                         </div>
//                     ))
//                     : "THERE IS NO IMAGES "
//                 }
//             </div>

//             {isAuthenticated &&
//                 <div className='createfunctiondiv' style={{ width: "22vw", border: "none" }} onClick={() => handleCreateIconClick("singleprewedimages")}>
//                     <img className='uploadicon' src="https://cdn-icons-png.flaticon.com/512/2920/2920658.png" alt="" />
//                     <h3>Upload More Images</h3>
//                 </div>
//             }

//             {/* ... (existing code) */}

//             <ConfirmationModal
//                 isOpen={isConfirmationModalOpen}
//                 onCancel={closeConfirmationModal}
//                 onConfirm={handleDeleteImage}
//             />
//         </div>
//     );
// };

// export default SinglePrewed;
