const redux = require("redux");
console.log(redux)

const createStore = redux.createStore;

// middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

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
};

const USER_CALL_LOGIN = "USER_CALL_LOGIN";
const userCallLoginAction = user => {
    return {
        type: USER_CALL_LOGIN,
        user_id: user.user_id,
        password: user.password,
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
};

const initialUser = {
    user_id: '',
    password: '',
}

const userReducer = (state = initialUser, action) => {
    switch(action.type) {
        case USER_CALL_LOGIN:
            return {
                ...state,
                user_id: action.user_id,
                password: action.password
            }
        default:
            return state;
    }
}

const rootReducer = redux.combineReducers({
    counter: counterReducer,
    user: userReducer
})

// store
const store = createStore(rootReducer, applyMiddleware(logger));

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

store.dispatch(userCallLoginAction({
    user_id: 'test',
    password: '1234'
}))