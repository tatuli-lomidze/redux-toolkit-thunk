import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk(
    '/todo/GET',
    async (_, ThunkAPI) => {
        try {
            const res = await fetch('api/v1/todo', {
                headers: {
                    'Content-Type': "application/json",
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            console.log(data);
            if(data) return ThunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return ThunkAPI.rejectWithValue('Somethings wrong')
        }
    }
)