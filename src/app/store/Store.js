import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import apiReducer from '../features/todo/apiSlice'

const Store = configureStore({
    reducer: {
        api: apiReducer,
        todo:todoReducer
    }
});

export default Store;