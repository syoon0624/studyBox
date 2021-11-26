import { Link } from 'react-router-dom';
import { useState } from 'react';
import Todo from '../component/Todo'
import { useDispatch, useSelector } from 'react-redux';
import { assignTodo, deleteTodos } from '../features/todoSlice';
import api from "../features/api";
import { useEffect } from 'react';

const TodoPage = () => {
    const [item, setItem] = useState('');

    const todoList = useSelector( state => state.todo.todoList);
    const dispatch = useDispatch();
    const fetchData = async () => {
        const a = await api.get();
        dispatch(assignTodo(a));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onChange = e => {
        setItem(e.target.value)
    };

    const handlePress = e => {
        if(e.key === "Enter") {
            createItem();
        }
    };

    const createItem = () => {
        if(item !== '') {
            addTask(item);
            setItem('');
        }
    };

    const addTask = (item) => {
        const newItem = async () => {
            const a = await api.post(item);
            console.log(a);
            let copy = await [a, ...todoList];
            dispatch(assignTodo(copy));
        }
        newItem();
    };

    const doneTodo = datas => {
        const newItem = async (datas) => {        
            const data = {
                id: datas.id,
                title: datas.text,
                done: !datas.done,
                order: 0,
            }
            await api.put(data);
            fetchData();
        }
        newItem(datas);
    };

    const deleteTodo = id => {
        const deleteItem = async (id) => {
            const a = await api.delete(id);
            console.log(a);
            fetchData();
        }
        deleteItem(id);
    };

    const updateTodo = (datas) => {
        const newItem = async (datas) => {        
            const data = {
                id: datas.id,
                title: datas.text,
                done: false,
                order: 0,
            }
            await api.put(data);
            fetchData();
        }
        newItem(datas);
    };

  return (
    <div>
        <div className="row">
            <div className="col s10">
                This is TodoPage.
            </div>
            <button className="waves-effect waves-light btn purple lighten-4">
                <Link to="/" className="white-text">홈으로 돌아가기</Link>
            </button>
        </div>
        <div className="input-field">
            <input id="todo_input" type="text" className="validate" onChange={onChange} onKeyPress={handlePress} value={item}/>
            <label className="active" htmlFor="todo_input">할일을 적고 엔터!</label>
        </div>
        <button className="btn" 
        onClick={createItem}>추가하기</button>
        <ul>
            {todoList.map(ele => {
               return( <Todo key={ele.id} 
                id = {ele.id}
                date={ele.createdAt}
                item={ele.title}
                isDone={ele.done} 
                doneTodo={doneTodo} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}/>)
            })}
        </ul>
    </div>
  );
}

export default TodoPage;
