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
        deleteTodos: (state, action) => {
            state.todoList = state.todoList.filter(ele => ele.text !== action.payload);
            if(state.todoList.length !== 0) {
                let count = 0;
                state.todoList = state.todoList.map(ele => {
                    count++;
                    ele.id = count;
                    return {...ele}
                })
            }
        }
    }
});

export const { assignTodo, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;