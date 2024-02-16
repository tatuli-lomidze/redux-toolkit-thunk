import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import darkModeReducer from './darkModeSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    darkMode: darkModeReducer,
  },
})

export default store
