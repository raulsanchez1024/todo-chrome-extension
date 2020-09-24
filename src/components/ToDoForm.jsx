import React, { useState } from 'react';
import types from '../state/types';


function ToDoForm({ tasks, dispatch }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (value) {
    const newTask = { title: value, completed: false, id: value };
    dispatch({ type: types.ADD_TASK, payload: { task: newTask } });
    setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input type="submit" value="Create Task"/>
    </form>
  );
}

export default ToDoForm;
