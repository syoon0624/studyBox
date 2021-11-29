import { createSlice } from "@reduxjs/toolkit";


const sortArr = (item) => {
    return item.sort(function(a, b) {
        if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          // a must be equal to b
          return 0;
    })
}


export const todoSlice = createSlice({
    name: 'counter',
    initialState: {
        todoList: []
    },
    reducers: {
        assignTodo: (state, action) => {
            state.todoList = action.payload;
            sortArr(state.todoList);
        },
    }
});


export const { assignTodo } = todoSlice.actions;

export default todoSlice.reducer;