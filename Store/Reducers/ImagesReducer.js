const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    images:null,
    singleimages:null,
    error:[],
}

export const ImagesReducer = createSlice({
    name:"Images",
    initialState,

    reducers:{
        addimages:(state,action)=>{
            state.images = action.payload
        },
        addsingleimages:(state,action)=>{
            state.singleimages = action.payload
        },
        iserror : (state,action)=>{
            state.error.push(action.payload);
        },
        removeerror : (state,action)=>{
            state.error = [];
        }
    }
})

export const { addimages , addsingleimages , iserror , removeerror } = ImagesReducer.actions

export default ImagesReducer.reducer