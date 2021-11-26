const redux = require("redux");
console.log(redux)

const createStore = redux.createStore;

// action
const ADD_COUNTER = "ADD_COUNTER";
const addCounter = () => {
    return {
        type: ADD_COUNTER,
    };
};

const MINUS_COUNTER = "MINUS_COUNTER"
const minusCounter = () => {
    return {
        type: MINUS_COUNTER,
    }
}

// reducer
const initial = {
    counter: 5,
}
const counterReducer = (state = initial, action) => {
    switch(action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter +1
            }
        case MINUS_COUNTER:
            return {
                ...state,
                counter: state.counter -1
            }
        default:
            return state;
    }
}

// store
const store = createStore(counterReducer);
console.log("최초 : ", store.getState());

// dispatch
store.dispatch(addCounter());

console.log(store.getState());

// subscribe 주로 리랜더용으로 쓰임.
store.subscribe(() => {
    console.log("subs....", store.getState());
})

store.dispatch(addCounter());
store.dispatch(addCounter());

store.dispatch(minusCounter());