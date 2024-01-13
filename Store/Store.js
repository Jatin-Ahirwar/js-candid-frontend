import { configureStore } from '@reduxjs/toolkit'
import AdminReducer  from './Reducers/AdminReducer'
import ImagesReducer from './Reducers/ImagesReducer'
import KidsReducer from './Reducers/KidsReducer'
import MaternityReducer from './Reducers/MaternityReducer'
import TrailerReducer from './Reducers/TrailerReducer'
import EventReducer from './Reducers/EventReducer'
import FashionReducer from './Reducers/FashionReducer'
import StoriesReducer from './Reducers/StoriesReducer'
import PreweddingReducer from './Reducers/PreweddingReducer'

export const store = configureStore({
  reducer: {
    AdminReducer,
    ImagesReducer,
    KidsReducer,
    MaternityReducer,
    TrailerReducer,
    EventReducer,
    FashionReducer,
    StoriesReducer,
    PreweddingReducer,
  },
})