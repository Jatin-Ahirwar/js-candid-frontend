import axios from "@/utils/axios";
import { addadmin  , iserror , removeerror, removeadmin } from "../Reducers/AdminReducer";
import { asyncaAllImages } from "./ImagesActions";
import { toast } from "react-toastify";
import { asyncaAllkidsImages } from "./KidsActions";
import { asyncaalltrailers } from "./TrailerActions";
import { asyncaSingleprewedding, asyncaallprewedding } from "./PreweddingActions";
import { asyncaSingleevent, asyncaallevents } from "./EventActions";
import { asyncaSinglefashion, asyncaallfashion } from "./FashionActions";
import { asyncaSinglestories, asyncaallstories } from "./StoriesActions";


export const asynccurrentadmin = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin")
        dispatch(addadmin(data))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncsignupadmin = (admin) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/signup", admin )
            dispatch(asynccurrentadmin())      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}

export const asyncsigninadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/signin" , admin)
        dispatch(asynccurrentadmin())     
        toast.success("Successfully Logged In. ") 
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message);
    }
}

export const asyncsignoutadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/signout" )
        dispatch(removeadmin())
        toast.success("Successfully Sign Out. ") 
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message);
    }
}

export const asyncmail = (client) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/sendmail" , client)
        dispatch(asynccurrentadmin())
        toast.success("Mail Sended Successfully.") 
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message);
    }
}

// ------------------------------------------ Stories Opening ---------------------------------------

export const asyncCreateStories = (content) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createStories" , content)
        dispatch(asynccurrentadmin())
        toast.success("Story Created Successfully.")
        dispatch(asyncaallstories())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncCreateStoriesFunction = (content,storyId) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/createStoriesfunction/` + storyId , content)
        dispatch(asynccurrentadmin())
        toast.success("Story Function Created Successfully.")
        dispatch(asyncaSinglestories(storyId))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncUpdateStoriesFunction = (content,functionId,storyId) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post(`/updateStoriesfunction/` + functionId , content)
        dispatch(asynccurrentadmin())
        const imagelength = [...content.entries()]
        const successMessage =  imagelength.length === 1
        ? "Story Function Image Uploaded Successfully."
        : imagelength.length > 1
        ? "Story Function Images Uploaded Successfully."
        : "Story Function Updated Successfully.";
        toast.success(successMessage)
        dispatch(asyncaSinglestories(storyId))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}


// ------------------------------------------ Stories Closing ---------------------------------------


// ------------------------------------------ Images Opening ---------------------------------------

export const asyncuploadimages = (Images) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createImages" , Images)
        dispatch(asynccurrentadmin())
        const imagelength = [...Images.entries()]
        const successMessage = imagelength.length === 1
            ? "Image Uploaded Successfully."
            : "Images Uploaded Successfully.";
        toast.success(successMessage)
        dispatch(asyncaAllImages())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

// ------------------------------------------ Images Closing ---------------------------------------


// ------------------------------------------ Kids Opening ---------------------------------------


export const asyncuploadkidsimages = (Images) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createkids" , Images)
        dispatch(asynccurrentadmin())
        const imagelength = [...Images.entries()]
        const successMessage = imagelength.length === 1
            ? "Image Uploaded Successfully."
            : "Images Uploaded Successfully.";
        toast.success(successMessage)
        dispatch(asyncaAllkidsImages())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

// ------------------------------------------ Kids Closing ---------------------------------------


// ------------------------------------------ Pre-wedding Opening ---------------------------------------

export const asyncCreatePrewedding = (content) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createprewedding" , content)
        dispatch(asynccurrentadmin())
        toast.success("Prewedding Created Successfully.")
        dispatch(asyncaallprewedding())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncUpdatePrewedding = (content,preweddingId) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/updateprewedding/" + preweddingId , content)
        dispatch(asynccurrentadmin())
        const imagelength = [...content.entries()]
        const successMessage =  imagelength.length === 1
        ? "Pre-Wedding Image Uploaded Successfully."
        : imagelength.length > 1
        ? "Pre-Wedding Images Uploaded Successfully."
        : "Pre-Wedding Updated Successfully.";
        toast.success(successMessage)
        dispatch(asyncaSingleprewedding(preweddingId))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

// ------------------------------------------ Pre-wedding Closing ---------------------------------------




// ------------------------------------------ Trailer Opening ---------------------------------------

export const asyncCreateTrailer = (content) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createtrailer" , content)
        dispatch(asynccurrentadmin())
        toast.success("Trailer Uploaded Successfully.")
        dispatch(asyncaalltrailers())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

// ------------------------------------------ Trailer Closing ---------------------------------------



// ------------------------------------------ Event Opening ---------------------------------------

export const asyncCreateEvent = (content) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createevent" , content)
        dispatch(asynccurrentadmin())
        toast.success("Event Created Successfully.")
        dispatch(asyncaallevents())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncUpdateEvent = (content,eventId) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/updateevent/" + eventId , content)
        dispatch(asynccurrentadmin())
        const imagelength = [...content.entries()]
        const successMessage =  imagelength.length === 1
        ? "Event Image Uploaded Successfully."
        : imagelength.length > 1
        ? "Event Images Uploaded Successfully."
        : "Event Updated Successfully.";
        toast.success(successMessage)
        dispatch(asyncaSingleevent(eventId))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}


// ------------------------------------------ Event Closing ---------------------------------------



// ------------------------------------------ Fashion Opening ---------------------------------------

export const asyncCreateFashion = (content) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createfashion" , content)
        dispatch(asynccurrentadmin())
        toast.success("Fashion Created Successfully.")
        dispatch(asyncaallfashion())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncUpdateFashion = (content,fashionId) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/updatefashion/" + fashionId , content)
        dispatch(asynccurrentadmin())
        const imagelength = [...content.entries()]
        const successMessage =  imagelength.length === 1
        ? "Fashion Image Uploaded Successfully."
        : imagelength.length > 1
        ? "Fashion Images Uploaded Successfully."
        : "Fashion Updated Successfully.";
        toast.success(successMessage)
        dispatch(asyncaSinglefashion(fashionId))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

// ------------------------------------------ Fashion Closing ---------------------------------------

