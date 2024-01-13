import axios from "@/utils/axios.js";
import {  addimages, addsingleimages, iserror } from "../Reducers/ImagesReducer.js";

export const asyncaAllImages = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallImages")
        dispatch(addimages(data.images))
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}