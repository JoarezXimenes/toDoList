import './App.css';
import React, {useState} from 'react';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar música',
      completed: true,
    }
  ])
  return (
    <div className="container">
      <Tasks />
    </div>
  );
}

export default App;
