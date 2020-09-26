import React, { useEffect, useReducer } from 'react';
import initialState from './state';
import types from './state/types.js'

// Components
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import './App.css';

const rootClass = 'app';

function setTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
  const taksFromLocalStorage = localStorage.getItem('tasks');
  if (!taksFromLocalStorage) {
      return localStorage.setItem(
        'tasks',
        JSON.stringify([]),
      );
    } else {
      return JSON.parse(localStorage.getItem('tasks'));
    }
}

function addTask(task) {
  const taksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  const updatedTasks = [...taksFromLocalStorage, task];
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function deleteTask(id) {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasksInLocalStorage(updatedTasks);
}

function toggleTask(id) {
  const tasks = getTasks();

  const updatedTasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasksInLocalStorage(updatedTasks);
}

function reducer(state, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      getTasks();
      return {
        ...state,
        tasks: getTasks(),
      };
    case types.ADD_TASK:
      addTask(action.payload.task);
      return {
        ...state,
        tasks: getTasks(),
      }
    case types.DELETE_TASK:
      deleteTask(action.payload.id);
      return {
        ...state,
        tasks: getTasks(),
      };
    case types.TOGGLE_TASK:
      toggleTask(action.payload.id);
      return {
        ...state,
        tasks: getTasks(),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tasks } = state;

  useEffect(() => {
    dispatch({ type: types.FETCH_TODOS });
  }, []);

  return (
    <div className={`${rootClass}__container`}>
      <h3 className={`${rootClass}__title`}>to-do</h3>
      <ToDoList tasks={tasks} dispatch={dispatch} />
      <ToDoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
