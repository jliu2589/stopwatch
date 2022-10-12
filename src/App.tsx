import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { time } from "console";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [names, setNames] = useState([]);

  const list = ["John", "Sally", "Tim", "Bob"];

  // Stop watch
  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // fetch
  useEffect(() => {
    if (seconds > 2) {
      fetch("/names.json")
        .then((res) => res.json())
        .then((data) => setNames(data));
    }
  }, [seconds > 2]);

  const handleStart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container mx-auto mt-4">
      <div>Hooks - Prop Drillings</div>
      <div>Stopwatch: {seconds.toFixed(1)}</div>
      <button
        className="bg-blue-400 p-2 rounded shadow"
        onClick={() => {
          handleStart();
          console.log(isActive);
        }}
      >
        Start/Stop
      </button>
      <div>
        <ul>
          <li>{JSON.stringify(names)}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
