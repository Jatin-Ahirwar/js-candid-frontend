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

export const asyncaSingleTrailer = (id) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsingletrailer/${id}`)
        dispatch(addsingletrailer(data.singletrailer))
        console.log(data.singletrailer)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}