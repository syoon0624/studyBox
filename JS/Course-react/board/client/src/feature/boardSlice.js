import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        boardList: []
    },
    reducers: {
        assignState: (state, action) => {
            state.boardList = action.payload;
            console.log("변한 값:",state.boardList);
        },
    }
});

export const { assignState } = boardSlice.actions;

export default boardSlice.reducer;