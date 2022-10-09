import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [timer, setTimer] = useState("Start");
  const [time, setTime] = useState(0);

  return (
    <div className="container mx-auto mt-4">
      <div>Hooks - Prop Drillings</div>
      <div>Stopwatch: </div>
      <button
        className="bg-blue-400 p-2 rounded shadow"
        onClick={() => {
          if (timer === "Start") {
            setTimer("Stop");
          }
          if (timer === "Stop") {
            setTimer("Start");
          }
          console.log("Change from Start to Stop. Activate Timer/ Stop Timer");
        }}
      >
        {timer}
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
