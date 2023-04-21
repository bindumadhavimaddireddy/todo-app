import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  
  const addItem = (value) => {
    setTasks([...tasks, { value, id: tasks.length }]);
  }
  const updateItem = (value, id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        const updatedTask = {
          ...task,
          value: value
        }
        return updatedTask;
      }
      return task;
    })
    setTasks(newTasks);
  }
  const deleteItem = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }
  return (
    <div className="container">
      <header className="App-header">
        <h1> TODO List</h1>
        <TodoInput addItem={addItem}/>
        <TodoList todos={tasks} onUpdate={updateItem} onDelete={deleteItem} />
      </header>
    </div>
  );
}

export default App;
