import React from 'react';
import types from '../state/types';

import './ToDoList.css';

function ToDoList({ tasks, dispatch }) {
  const rootClass = 'to-do-list';

  function deleteTask(id) {
    return dispatch({ type: types.DELETE_TASK, payload: { id } });
  }

  function toggleTask(id) {
    dispatch({ type: types.TOGGLE_TASK, payload: { id } });
  }

  return (
    <ul>
      {tasks.map(({ title, id, completed }) => {
        const toggledClass = completed ?
          `${rootClass}__completed` : `${rootClass}__not-completed`;

        return (
          <li key={title}>
            <span className={toggledClass}>{ title }</span>
            <button onClick={() => toggleTask(id)}>toggle</button>
            <button onClick={() => deleteTask(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
