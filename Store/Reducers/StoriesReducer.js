const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    stories:null,
    singlestories:null,
    error:[]
}

export const StoriesReducer = createSlice({
    name:"stories",
    initialState,
    
    reducers:{
        addstories:(state,action) =>{
            state.stories = action.payload
        },
        addsinglestories:(state,action) =>{
            state.singlestories = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addstories , addsinglestories , iserror , removeerror } = StoriesReducer.actions

export default StoriesReducer.reducer