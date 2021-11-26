import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./type"

const initial = {
    pending: false,
    error: false,
    data: {
        userId: '',
        id: '',
        title: '',
        completed: ''
    }
}
export const apiReducer = (state = initial, action) => {
    switch(action.type) {
        case GET_REQUEST:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case GET_SUCCESS:
            const { title, id, userId, completed } = action.payload.data
            return {
                ...state,
                pending: false,
                data: {
                    title,
                    id,
                    userId,
                    completed
                }
            }
        case GET_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            }
        default:
            return state;
    }
}

export default apiReducer;