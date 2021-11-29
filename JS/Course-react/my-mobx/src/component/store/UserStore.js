import { action, makeObservable, observable, runInAction } from "mobx"
import { getApiAxios } from "../api/jsonApi";

class UserStore {
    user = {
        userId: '',
        id: '',
        title: '',
        completed: ''
    };

    constructor(){
        makeObservable(this , {
            user: observable,
            getUser: action,
        });
    }


    getUser = postId => {
        getApiAxios(postId)
        .then(
            response => {
                console.log('성공!');
                //mobx식 비동기 처리(확실하지 x)
                runInAction(() => {
                    this.user = response.data;
                });
            }
        ).catch(
            err => {
                console.log('err!');
                runInAction(() => {
                    this.user = {
                        userId: '',
                        id: '',
                        title: '',
                        completed: ''
                    }
                })
            }
        )
    };
}

export default UserStore