const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    fashions:null,
    singlefashion:null,
    error:[]
}

export const FashionReducer = createSlice({
    name:"Fashion",
    initialState,
    
    reducers:{
        addfashions:(state,action) =>{
            state.fashions = action.payload
        },
        addsinglefashion:(state,action) =>{
            state.singlefashion = action.payload
        },
        iserror:(state,action) =>{
            state.error.push(action.payload)
        },
        removeerror:(state,action)=>{
            state.error = []
        }
    }
})

export const { addfashions , addsinglefashion , iserror , removeerror } = FashionReducer.actions

export default FashionReducer.reducer