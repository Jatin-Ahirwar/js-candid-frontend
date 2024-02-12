import axios from "@/utils/axios";
import { addadmin  , iserror , removeerror, removeadmin } from "../Reducers/AdminReducer";
import { asyncaAllImages } from "./ImagesActions";
import { toast } from "react-toastify";




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
        // console.log("Error during signout:", error);
        // dispatch(iserror(error.response ? error.response.data.message : "Unknown error"));
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncuploadimages = (Images) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createImages" , Images)
        dispatch(asynccurrentadmin())
        dispatch(asyncaAllImages())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



