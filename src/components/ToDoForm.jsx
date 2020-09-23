import React, { useState } from 'react';

function ToDoForm({ tasks }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // add value to localState
    const newTask = { title: value };
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(value);
    console.log(updatedTasks);
    setValue('');
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
