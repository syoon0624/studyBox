import React from "react";

const Todo = ({item, doneTodo, isDone}) => {
    const handleClick = (e) => {
        e.preventDefault()
        doneTodo(item);
    }
    return (
      <li className={isDone ? "line" : ""}>
         {item}
         <button onClick={handleClick}>Toggle</button>
      </li>
    );
}

export default Todo