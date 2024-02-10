import axios from "@/utils/axios";
import { addadmin , removeAdmin , iserror , removeerror } from "../Reducers/AdminReducer";
import { asyncaAllImages } from "./ImagesActions";




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
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignoutadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.get("/signout" , admin)
        dispatch(removeAdmin())
    } catch (error) {
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



