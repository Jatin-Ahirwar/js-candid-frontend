import axios from "@/utils/axios.js";
import { addimages, addsingleimage, iserror, removeerror } from "../Reducers/MaternityReducer";

export const asyncaAllImages = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallmaternity")
        dispatch(addimages(data.imagesArray))
        console.log(data.imagesArray)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncaSingleImages = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsinglematernity/:${index}`)
        dispatch(addsingleimage(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}