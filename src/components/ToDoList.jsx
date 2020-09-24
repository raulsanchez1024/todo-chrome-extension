import React from 'react';
import types from '../state/types';

function ToDoList({ tasks, dispatch }) {
  function deleteTask(id) {
    dispatch({ type: types.DELETE_TASK, payload: { id } });
  }

  function toggleTask(id) {
    dispatch({ type: types.TOGGLE_TASK, payload: { id } });
  }

  return (
    <ul>
      {tasks.map(({ title, id }) => (
        <li key={title}>
          { title }
          <button onClick={() => toggleTask(id)}>toggle</button>
          <button onClick={() => deleteTask(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
