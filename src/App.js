import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Goal from './Goal';

function App() {
  return (
    <div className="App">
      <h1>Ukasha Zahid</h1>
      <p>I am learning the MERN Stack</p>
      <Welcome />
      <h2>My Goals for MERN Stack</h2>
      <ul>
        <Goal title="Master React and frontend development" />
        <Goal title="Understand Node.js and Backend" />
        <Goal title="Build and deploy full-stack apps" />

      </ul>
    </div>
  );
}

export default App;
