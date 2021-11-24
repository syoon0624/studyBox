import React, { useState } from "react";

const Todo = props => {
    const {id, item, doneTodo, isDone, deleteTodo, updateTodo} = props;
    const [isUpdate, setIsUpdate] = useState(false);
    const [text, setText] = useState(item);
    
    const handleClick = (e) => {
        e.preventDefault()
        doneTodo(item);
    };
    const handleDelete = e => {
      e.preventDefault();
      deleteTodo(item);
    };
    const handleUpdate = e => {
      e.preventDefault();
      setIsUpdate(true);
    };

    const onChange = e => {
      setText(e.target.value);
    };

    const updateIsDone = e => {
      e.preventDefault();
      updateTodo(item, text);
      setIsUpdate(false);
    };
    const updateIsNotDone = e => {
      e.preventDefault();
      setIsUpdate(false);
    };
    return (
      <li className="card">
      <div className="card-content">
        <p className="card-title">{id} 번째 </p> 
        {
        isUpdate ? 
          <> 
           <input value={text} 
           onChange={onChange}
           />
           <button className="btn-small blue darken-4"
           onClick={updateIsDone}> 완료 </button>
           <button className="btn-small red"
           onClick={updateIsNotDone}> 취소 </button>
          </> :
           <p className={isDone ? "line" : ""}>{item}</p>     
        }
      </div>
      <div className="row card-content grey lighten-4">
        <button className="col s2 offset-s8 waves-effect btn blue darken-4"
        onClick={handleClick}>{isDone ? "되돌리기" : "완료하기"}</button>
        <button className="col s1 btn"
        onClick={handleUpdate}>수정</button>
        <button className="col s1 btn red"
        onClick={handleDelete}>삭제</button>
      </div>
    </li>
    );
}

export default Todo