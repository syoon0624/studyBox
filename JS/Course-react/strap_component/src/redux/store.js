import { createStore, applyMiddleware } from "redux";
import counterReducer from "./counter/reducer";
import logger from "redux-logger";

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
