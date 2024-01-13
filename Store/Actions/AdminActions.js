import axios from "@/utils/axios";
import { addadmin , removeAdmin , iserror , removeerror } from "../Reducers/AdminReducer";




export const asynccurrentadmin = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin")
        dispatch(addadmin(data.admin))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignupadmin = (admin) => async(dispatch,getstate) =>{
        try {
            const { data } = await axios.post("/signup", admin )
            asynccurrentadmin()      
        } catch (error) {
            dispatch(iserror(error.response.data.message))
        }
}


export const asyncsigninadmin = (admin) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/signin" , admin)
        asynccurrentadmin()      
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



export const asyncshowinternships = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin/read/internships/"  )
        dispatch(addinternships(data.internships))
        dispatch(asynccurrentadmin())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncshowsingleinternships = (id) => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin/readsingle/internship/" + id  )
        dispatch(addinternships(data.internship))
        dispatch(asynccurrentadmin())

    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncshowjobs = () => async(dispatch,getstate) =>{
    try {
        const { data } = await axios.post("/admin/read/jobs/"  )
        dispatch(addjobs(data.jobs))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}



