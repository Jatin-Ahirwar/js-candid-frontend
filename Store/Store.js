import { configureStore } from '@reduxjs/toolkit'
import AdminReducer  from './Reducers/AdminReducer'
import ImagesReducer from './Reducers/ImagesReducer'
import KidsReducer from './Reducers/KidsReducer'
import MaternityReducer from './Reducers/MaternityReducer'

export const store = configureStore({
  reducer: {
    AdminReducer,
    ImagesReducer,
    KidsReducer,
    MaternityReducer
  },
})