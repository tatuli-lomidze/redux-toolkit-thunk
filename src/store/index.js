import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './darkModeSlice'
import todoReducer from './todoSlice'

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    todo: todoReducer,
  },
})

export default store
