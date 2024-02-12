import axios from "@/utils/axios.js";
import {  addimages, addsingleimages, iserror } from "../Reducers/ImagesReducer.js";
import { toast } from "react-toastify";

export const asyncaAllImages = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallImages")
        dispatch(addimages(data.images))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
        toast.error(error.response.data.message)
    }
}

export const asyncaSingleImage = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsingleImages/${index}`)
        dispatch(addsingleimages(data.singleImage))
        console.log(data.singleImage)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}