import axios from "axios";

export const getApiAxios = postId => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
};