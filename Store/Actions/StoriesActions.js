import axios from "@/utils/axios.js";
import { addstories, addsinglestories, iserror, removeerror } from "../Reducers/StoriesReducer.js";

export const asyncaallstories = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallstories")
        dispatch(addstories(data.allstories))
        console.log(data.allstories)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncaSinglestories = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsinglestories/:${index}`)
        dispatch(addsinglestories(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}