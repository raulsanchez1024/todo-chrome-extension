import React, { useState, useEffect } from 'react';

// Components
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import './App.css';

const rootClass = 'toDo';

function App() {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(localStorageTasks);

  function getTasks() {
    const taksFromLocalStorage = localStorage.getItem('tasks');
    if (!taksFromLocalStorage) {
      localStorage.setItem(
        'tasks',
        JSON.stringify([{title: 'Finish unit test for DE213421'}]),
      );
    } else {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
      console.log(JSON.parse(taksFromLocalStorage));
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={`${rootClass}__container`}>
      <h3 className={`${rootClass}__title`}>To Do</h3>
      <ToDoList tasks={tasks} />
      <ToDoForm tasks={tasks} />
    </div>
  );
}

export default App;
