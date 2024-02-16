import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('api/v1/todos')
            const data = await res.json()
            return data.todos
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch todos')
        }
    }
);
