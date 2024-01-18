import axios from "@/utils/axios.js";
import { addimages, addsingleimage, iserror, removeerror } from "../Reducers/KidsReducer";

export const asyncaAllImages = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallkids")
        dispatch(addimages(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncaSingleImages = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsinglekids/${index}`)
        dispatch(addsingleimage(data.singleImage))
        console.log(data.singleImage)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}