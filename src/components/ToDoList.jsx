import React from 'react';

function ToDoList({ tasks }) {
  return (
    <ul>
      {tasks.map(({ title }) => (
        <li key={title}>
          { title }
          <button>x</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
