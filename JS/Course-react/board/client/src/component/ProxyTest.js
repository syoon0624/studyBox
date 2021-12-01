import React, { useState } from 'react'
import axios from 'axios'

const ProxyTest = () => {
    const [getData, setGetData] = useState("");
    const [getJson, setGetJson] = useState({});
    const [postJson, setGetPostJson] = useState({});
    const [data, setData] = useState("");

    const getApiUsers = () => {
        axios.get("/users")
        .then(response => {
                console.log(response);
                setGetData(response.data);
            }).catch(err => {
                console.log(err);
            })
    };

    const getApiUsersJson = () => {
        axios.get("/users/json")
        .then(response => {
                console.log(response);
                setGetJson(response.data);
            }).catch(err => {
                console.log(err);
            })
    }

    const postApiUsersJson = () => {
        axios.post("/users/post")
        .then(response => {
                console.log(response);
                setGetPostJson(response.data);
            }).catch(err => {
                console.log(err);
            })
    };

    const sendData = () => {
        axios.post("/users/sendData?type=login", {
            userId:"root",
            password: "admin1234",
        })
        .then(response => {
                console.log(response);
                setGetPostJson(response.data);
            }).catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <div>
                <h2>local 서버에서 get 방식으로 호출하기</h2>
                <div>{ getData }</div>
                <button onClick={() => {
                    getApiUsers()
                }}>get</button>    
            </div>   
            <div>
                <h2>local 서버에서 get 방식으로 JSON data 호출하기</h2>
                <div>{ JSON.stringify(getJson) }</div>
                <div> { getJson.message }</div>
                <button onClick={() => {
                    getApiUsersJson()
                }}>getJson</button>    
            </div>     
            <div>
                <h2>local 서버에서 post 방식으로 JSON data 받기</h2>
                <div>{ JSON.stringify(postJson) }</div>
                <div> { getJson.message }</div>
                <button onClick={() => {
                    postApiUsersJson()
                }}>postJson</button>    
            </div>   
            <div>
                <h2>local 서버에서 post 방식으로 JSON data 보내기</h2>
                <div>{data}</div>
                <button onClick={() => {
                    sendData()
                }}>postJson</button>    
            </div>       
        </div>
    )
}

export default ProxyTest
