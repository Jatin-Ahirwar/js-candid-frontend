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


export const asyncaSingleprewedding = (id) => async(dispatch,getstate)=>{
    try {
        const { data } = await axios.post(`/findsingleprewedding/${id}`)
        dispatch(addsingleprewedding(data.singleprewedding))
        console.log(data.singleprewedding)
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}