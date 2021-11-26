import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import apiReducer from "./thunk/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    request: apiReducer,
});

export default rootReducer;