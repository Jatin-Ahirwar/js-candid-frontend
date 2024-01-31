import axios from "@/utils/axios";
import { addadmin , removeAdmin , iserror , removeerror } from "../Reducers/AdminReducer";




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

export const asyncuploadimages = (images) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/createImages" , images)
        dispatch(asynccurrentadmin())
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



