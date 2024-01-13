const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    preweddings:null,
    singleprewedding:null,
    error:[]
}

export const PreweddingReducer = createSlice({
    name:"prewedding",
    initialState,
    
    reducers:{
        addpreweddings:(state,action) =>{
            state.preweddings = action.payload
        },
        addsingleprewedding:(state,action) =>{
            state.singleprewedding = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addpreweddings , addsingleprewedding , iserror , removeerror } = PreweddingReducer.actions

export default PreweddingReducer.reducer