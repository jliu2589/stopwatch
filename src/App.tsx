import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [timeMs, setTimeMs] = useState(0);
  const [timeSec, setTimeSec] = useState(0);
  const [timeMin, setTimeMin] = useState(0);

  const handleStart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container mx-auto mt-4">
      <div>Hooks - Prop Drillings</div>
      <div>
        Stopwatch: {timeMin}:{timeSec}:{timeMs}
      </div>
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
          <li>list</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
