import {configureStore} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import tasksReducer from './slices/taskSlice';
const store = configureStore({
   reducer : {
    tasks: tasksReducer,
   },
   middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk),
})

export default store;