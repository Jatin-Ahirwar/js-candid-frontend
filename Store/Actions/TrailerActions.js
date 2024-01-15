import axios from "@/utils/axios.js";
import { addtrailers , addsingletrailer, iserror, removeerror } from "../Reducers/TrailerReducer.js";

export const asyncaalltrailers = () => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post("/findalltrailer")
        dispatch(addtrailers(data))
        console.log(data)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncaSingleImages = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsingletrailer/:${index}`)
        dispatch(addsingletrailer(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}