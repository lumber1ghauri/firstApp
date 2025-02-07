import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Goal from './Goal';
import React, { useState } from 'react';

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Master React and frontend development" },
    { id: 2, title: "Understand Node.js and Backend" },
    { id: 3, title: "Build and deploy full-stack apps" }
  ]);

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="App">
      <h1 className="center-text">Ukasha Zahid</h1>
      <p>I am learning the MERN Stack</p>

      <h2>My Goals for MERN Stack</h2>

      {goals.length > 0 ? (
        <ul>
          {goals.map((goal) => (
            <Goal key={goal.id} goal={goal} onDelete={() => deleteGoal(goal.id)} />
          ))}
        </ul>
      ) : (
        <p>No goals left. Add some goals to stay motivated!</p>
      )}
    </div>
  );
}
export default App;
