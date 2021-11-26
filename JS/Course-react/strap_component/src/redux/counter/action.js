import { ADD_COUNTER, MINUS_COUNTER } from "./types";

export const addCounter = () => {
    return {
        type: ADD_COUNTER
    };
};


export const minusCounter = () => {
    return {
        type: MINUS_COUNTER,
    }
}