const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    events:null,
    singleevent:null,
    error:[]
}

export const EventReducer = createSlice({
    name:"Events",
    initialState,
    
    reducers:{
        addevents:(state,action) =>{
            state.events = action.payload
        },
        addsingleevent:(state,action) =>{
            state.singleevent = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addevents , addsingleevent , iserror , removeerror } = EventReducer.actions

export default EventReducer.reducer