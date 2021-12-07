import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../feature/boardSlice"

export default configureStore({
    reducer: {
        board: boardReducer,
    },
});