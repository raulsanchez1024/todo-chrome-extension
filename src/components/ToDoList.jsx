import React from 'react';
import types from '../state/types';

import './ToDoList.css';

const rootClass = 'to-do-list';

function ToDoList({ tasks, dispatch }) {

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
          <li className={`${rootClass}__task`} key={title}>
            <span className={toggledClass}>{ title }</span>
            <button
              className={`${rootClass}__toggle-btn`}
              onClick={() => toggleTask(id)}
            >
              Toggle
            </button>
            <button
              className={`${rootClass}__delete-btn`}
              onClick={() => deleteTask(id)}
            >
              🗑
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
