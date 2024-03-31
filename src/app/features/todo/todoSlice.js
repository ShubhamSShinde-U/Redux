import { createSlice, nanoid } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    todos: [
        {
            id: '1fdssfsfd',
            text: 'demo'
        }
    ]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }

        ,
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            console.log(text);
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, text: text };
                }
                return todo;
            });
        }

    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;