import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import TodoStore from './TodoStore';

interface TodoListProps {
  todoStore: TodoStore;
}

const TodoList: React.FC<TodoListProps> = ({ todoStore }) => {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (value) {
            todoStore.addTodo(value);
          }
          setValue('');
        }}
      >
        Submit
      </button>
      <div>Completed: {todoStore.status.completed} </div>
      <div>Remaining: {todoStore.status.remaining} </div>
      <ul>
        {todoStore.todos.map((ele) => {
          return (
            <li
              key={ele.id}
              onClick={() => {
                todoStore.toggleTodo(ele.id);
              }}
            >
              {ele.title} [{ele.completed ? 'X' : ' '}]
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(TodoList);
