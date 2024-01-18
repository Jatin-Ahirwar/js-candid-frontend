import axios from "@/utils/axios.js";
import {  addevents, addsingleevent, iserror, removeerror } from "../Reducers/EventReducer.js";

export const asyncaallevents = () => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post("/findallevent")
        dispatch(addevents(data.allevent))
        console.log(data.allevent)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncaSingleevent = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsingleevent/${index}`)
        dispatch(addsingleevent(data.singleevent))
        console.log(data.singleevent)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}