import { createSlice } from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: 'light',
  reducers: {
    toggleDarkMode: (state) => (state === 'light' ? 'dark' : 'light'), 
  }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer