import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'counter',
    initialState: {
        todoList: []
    },
    reducers: {
        assignTodo: (state, action) => {
            state.todoList = action.payload
        },
    }
});

export const { assignTodo, deleteTodos, getTodo } = todoSlice.actions;

export default todoSlice.reducer;