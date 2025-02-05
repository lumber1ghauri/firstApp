import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Goal from './Goal';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [goals, setGoals] = useState([
    "Master React and frontend development",
    "Understand Node.js and Backend",
    "Build and deploy full-stack apps",
  ]);
  const deleteGoal = (goalToDelete) => {
    setGoals(goals.filter((goal) => goal !== goalToDelete));
  };

  const [newGoal, setNewGoal] = useState("");
  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal]);
      setNewGoal("");
    }
  };

  return (
    <div className="App">
      <h1>Ukasha Zahid</h1>
      <p>I am learning the MERN Stack</p>
      <Welcome />
      <h2>My Goals for MERN Stack</h2>
      <ul>
        {goals.map((goal, index) => (
          <Goal key={index} title={goal}
          onDelete={() => deleteGoal(goal)} />
        ))}
      </ul>
      <h3>Add a new Goal</h3>
      <input 
      type = "text"
      value = {newGoal}
      onChange={(e) => setNewGoal(e.target.value)}
      placeholder = "Enter a new goal"/>
      <button onClick={addGoal}>Add Goal</button>
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
}

export default App;
