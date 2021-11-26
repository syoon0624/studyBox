import axios from 'axios'

const { REACT_APP_API_KEY, REACT_APP_USER_NAME } = process.env;

console.log(process.env)

const url = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
const headers= {
    'content-type': 'application/json',
    'apikey': REACT_APP_API_KEY,
    'username': REACT_APP_USER_NAME
}
  
export const todoApi = {
    get: async () => {
      const { data } = await axios({
        method: 'GET',
        url,
        headers,
      });
      return data;
    },
    post: async title  => {
        const { data } = await axios({
            method: 'POST',
            url,
            headers,
            data: {
                title,
            }
        })
        return data;
    },
    put: async item => {
        const {id, title, done, order} = item;
        if(id) {
            const { data } = await axios({
                method: "PUT",
                url: `${url}/${id}`,
                headers,
                data: {
                    title,
                    done,
                    order
                }
            })
            return data;
        } else {
            return console.log("빈 ID 입니다.");
        }
    },
    delete: async id => {
        if(id){
            const { data } = await axios({
                method: "DELETE",
                url: `${url}/${id}`,
                headers
            })
            return data;
        } else {
            return console.log("없는 ID 입니다.");
        }
    }

}

export default todoApi;