const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    images:null,
    singleimage:null,
    error:[]
}

export const KidsReducer = createSlice({
    name:"kids",
    initialState,
    
    reducers:{
        addimages:(state,action) =>{
            state.images = action.payload
        },
        addsingleimage:(state,action) =>{
            state.singleimage = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addimages , addsingleimage , iserror , removeerror } = KidsReducer.actions

export default KidsReducer.reducer