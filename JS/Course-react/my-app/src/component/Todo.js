import React, { useState } from "react";

const Todo = props => {
    const {id, item, doneTodo, isDone, deleteTodo, updateTodo, date} = props;
    const [isUpdate, setIsUpdate] = useState(false);
    const [text, setText] = useState(item);

    const handleClick = (e) => {
        e.preventDefault()
        const datas = {
          text: item,
          id,
          done: isDone,
        }
        doneTodo(datas);
    };
    const handleDelete = e => {
      e.preventDefault();
      deleteTodo(id);
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
      const datas = {
        text,
        id
      }
      updateTodo(datas);
      setIsUpdate(false);
    };
    const updateIsNotDone = e => {
      e.preventDefault();
      setIsUpdate(false);
    };
    return (
      <li className="card">
      <div className="card-content">
        <span>
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
           <p className={isDone ? `card-title line` : "card-title"}>{item}</p>     
        }
        </span>
        <p>생성날짜: {date}</p> 
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