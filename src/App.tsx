import { useApplicationState } from "./store";

//Time Display
const TimerDisplay: React.FunctionComponent<{
  seconds: number;
}> = ({ seconds }) => (
  <div>
    <span>Stopwatch: </span>
    <span>{seconds.toFixed(1)}</span>
  </div>
);

//Toggle
const TimerToggle: React.FunctionComponent<{
  isActive: boolean;
  onToggle: () => void;
}> = ({ isActive, onToggle }) => (
  <div>
    <button onClick={onToggle}>{isActive ? "Stop" : "Start"}</button>
  </div>
);

//Names
const Names: React.FunctionComponent<{
  names?: string[];
}> = ({ names }) =>
  names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(names)}</div>
    </>
  ) : null;

function App() {
  const { seconds, isActive, names, onToggle } = useApplicationState();
  return (
    <div>
      <h1>Hooks - Prop Drilling</h1>
      <TimerDisplay seconds={seconds} />
      <TimerToggle isActive={isActive} onToggle={onToggle} />
      <Names names={names} />
    </div>
  );
}

export default App;
