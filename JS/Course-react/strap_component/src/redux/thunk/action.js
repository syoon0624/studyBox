import { getApiAxios } from '../../api/jsonApi';
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from './type';

function getApi(postId) {
    return getApiAxios(postId);
}


export const getPost = (postId) => (dispatch) => {
    // 요청을 시작합니다.
    dispatch({type: GET_REQUEST});

    return getApi(postId).then((response) => {
        //요청이 성공
        dispatch({
            type: GET_SUCCESS,
            payload: response
        })
    }).catch((error)=> {
        //요청이 실패
        dispatch({
            type: GET_FAILURE,
            payloda: error,
        })
        throw error
    })
}