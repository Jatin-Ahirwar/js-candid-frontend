import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin:null,
    errors:[],
    isAuthenticated:false,
}

export const AdminReducer = createSlice({
    name: 'admin',
    initialState,
    reducers: {

    addadmin: (state,action) =>{
    state.admin = action.payload
    state.isAuthenticated = true
    },
        
    removeadmin: (state,action) =>{
    state.admin = null,
    state.isAuthenticated = false,
    state.errors = []
    },

    iserror: (state,action) =>{
    state.errors.push(action.payload)
    },

    removeerror: (state,action) =>{
        state.errors = []
    },   

  },
  
})

export const { 
    addadmin ,
    removeAdmin , 
    iserror , 
    removeerror 
} = AdminReducer.actions

export default AdminReducer.reducer