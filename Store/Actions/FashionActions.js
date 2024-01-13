import axios from "@/utils/axios.js";
import {  addfashions , addsinglefashion ,  iserror, removeerror } from "../Reducers/FashionReducer.js";

export const asyncaallfashion = () => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post("/findallfashion")
        dispatch(addfashions(data.allfashion))
        console.log(data.allfashion)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncaSinglefashion = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsinglefashion/:${index}`)
        dispatch(addsinglefashion(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}