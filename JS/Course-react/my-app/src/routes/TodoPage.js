import { Link } from 'react-router-dom';
import {useState} from 'react';
import Todo from '../component/Todo'

const TodoPage = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')
    const onChange = e => {
        setItem(e.target.value)
    }
    const handlePress = e => {
        if(e.key === "Enter") {
            createItem();
        }
    }
    const createItem = () => {
        if(item !== '') {
            addTask(item);
            setItem('');
        }
    }
    const addTask = item => {
        let copy = [...list,{text: item, isDone: false} ];
        setList(copy)
    }
    const doneTodo = text => {
        let copy = list.map(ele => {
            return ele.text === text ? {...ele, isDone: !ele.isDone} : {...ele};
        })
        setList(copy);
    }
  return (
    <div>
        This is TodoPage.<br />
        <input onChange={onChange} onKeyPress={handlePress} value={item}/>
        <button onClick={createItem}>추가하기</button>
        <button><Link to="/">홈으로 돌아가기</Link></button>
        <ul>
            {list.map(ele => {
               return( <Todo item = {ele.text} isDone={ele.isDone} doneTodo = {doneTodo} />)
            })}
        </ul>
    </div>
  );
}

export default TodoPage;
