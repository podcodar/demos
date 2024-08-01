import React from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm />
      <TaskDashboard />
    </div>
  );
}

export default App;
