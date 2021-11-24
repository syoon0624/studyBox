import { Link } from 'react-router-dom';
import { useState} from 'react';
import Todo from '../component/Todo'

const TodoPage = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

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

    const addTask = item => {
        let copy = [...list,{id: list.length+1, text: item, isDone: false} ];
        setList(copy)
    };

    const doneTodo = text => {
        let copy = list.map(ele => {
            return ele.text === text ? {...ele, isDone: !ele.isDone} : {...ele};
        })
        setList(copy);
    };

    const deleteTodo = text => {
        let copy = list.filter(ele => ele.text !== text)
        if(list.length !== 0) {
            let count = 0;
            copy = copy.map(ele => {
                count++;
                ele.id = count;
                return {...ele}
            })
            setList(copy);
        } else {
            setList(copy);
        } 
    };

    const updateTodo = (text, newText) => {
        let copy = list.map(ele => {
            return ele.text === text ? {...ele, text: newText} : {...ele};
        })
        setList(copy);
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
            {list.map(ele => {
               return( <Todo key={ele.id} 
                id={ele.id}
                item={ele.text}
                isDone={ele.isDone} 
                doneTodo={doneTodo} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}/>)
            })}
        </ul>
    </div>
  );
}

export default TodoPage;
