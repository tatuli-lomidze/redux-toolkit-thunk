import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "./todoThunks";

const initialState = {
    todo: [],
    loading: false,
    error: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.todo = action.payload;
            })
            .addCase(getTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }

});

export default todoSlice.reducer;
