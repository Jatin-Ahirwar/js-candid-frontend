import axios from "@/utils/axios";
import { addadmin  , iserror , removeerror, removeadmin } from "../Reducers/AdminReducer";
import { asyncaAllImages } from "./ImagesActions";
import { toast } from "react-toastify";
import { asyncaAllkidsImages } from "./KidsActions";
import { asyncaalltrailers } from "./TrailerActions";
import { asyncaallprewedding } from "./PreweddingActions";
import { asyncaallevents } from "./EventActions";
import { asyncaallfashion } from "./FashionActions";
import { asyncaallstories } from "./StoriesActions";


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

