import Home from "./Home";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Stopwatch from "./Stopwatch";
import Stop from "./Stop";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>  Stopwatch App </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/Stop" element={<Stop />} />
      </Routes>
    </div>
  );
}

export default App;
