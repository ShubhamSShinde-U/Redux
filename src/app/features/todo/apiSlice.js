import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    posts: [],
    status: 'ideal',
    error: null
}

export const fetchData = createAsyncThunk('user/data', async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    // console.log(data.data);
    return data.data
})

export const apiSlice = createSlice({
    name: 'apiData',
    initialState,
    reducers: {
        postData: (state, action) => {
            state.posts.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts.push(action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})



const newInitialState = {
    
}

export const { postData } = apiSlice.actions;
export default apiSlice.reducer;


