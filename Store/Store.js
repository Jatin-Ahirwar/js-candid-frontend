import { configureStore } from '@reduxjs/toolkit'
import  EmployeReducer  from './Reducers/EmployeReducer'

export const store = configureStore({
  reducer: {
    EmployeReducer
  },
})