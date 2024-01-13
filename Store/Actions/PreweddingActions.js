import axios from "@/utils/axios.js";
import { addpreweddings, addsingleprewedding, iserror, removeerror } from "../Reducers/PreweddingReducer.js";

export const asyncaallprewedding = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.post("/findallprewedding")
        dispatch(addpreweddings(data.allprewedding))
        console.log(data.allprewedding)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncaSingleprewedding = (index) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsinglematernity/:${index}`)
        dispatch(addsingleprewedding(data.images))
        console.log(data.images)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}