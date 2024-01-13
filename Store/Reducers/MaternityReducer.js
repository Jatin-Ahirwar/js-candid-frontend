const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    images:null,
    singleimage:null,
    error:[]
}

export const MaternityReducer = createSlice({
    name:"Maternity",
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

export const { addimages , addsingleimage , iserror , removeerror } = MaternityReducer.actions

export default MaternityReducer.reducer