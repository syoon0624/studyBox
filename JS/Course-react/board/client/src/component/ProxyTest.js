import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Board from './Board';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { assignState } from '../feature/boardSlice';

const ProxyTest = () => {

    const boardList = useSelector(state => state.board.boardList);

    const dispatch = useDispatch();

    const [getData, setGetData] = useState("");
    const [getJson, setGetJson] = useState([]);
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
        axios.post("/board?type=list")
        .then(response => {
                console.log(response);
                dispatch(assignState(response.data.json));
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

    useEffect(() => {
        getApiUsersJson();
    }, [])

    return (
        <div>
            <div>
                <h2>게시판 글 모음</h2>
                <Table>
                <thead>
                    <th>제목</th>
                    <th>내용</th>
                    <th>글쓴이</th>
                    <th>게시일</th>
                </thead>
                <tbody>
                {boardList.map(ele => {
                    return <Board items={ele}/>
                })}
                </tbody>
                </Table>
            </div>         
        </div>
    )
}

export default ProxyTest
