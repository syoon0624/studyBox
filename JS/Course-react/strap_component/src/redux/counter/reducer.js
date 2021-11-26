import { ADD_COUNTER, MINUS_COUNTER } from "./types";


const initial = {
    counterStore: 5,
}
const counterReducer = (state = initial, action) => {
    switch(action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counterStore: state.counterStore + 1
            };
        case MINUS_COUNTER:
            return {
                ...state,
                counterStore: state.counterStore -1,
            };
        default:
            return state;
    };
};

export default counterReducer