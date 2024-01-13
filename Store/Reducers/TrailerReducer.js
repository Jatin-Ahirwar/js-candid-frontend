const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    trailers:null,
    singletrailer:null,
    error:[]
}

export const TrailerReducer = createSlice({
    name:"Trailer",
    initialState,
    
    reducers:{
        addtrailers:(state,action) =>{
            state.trailers = action.payload
        },
        addsingletrailer:(state,action) =>{
            state.singletrailer = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addtrailers , addsingletrailer , iserror , removeerror } = TrailerReducer.actions

export default TrailerReducer.reducer