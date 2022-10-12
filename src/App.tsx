import { useApplicationState } from "./store";

//Time Display
const TimerDisplay: React.FunctionComponent<{
  seconds: number;
}> = ({ seconds }) => (
  <div className="mt-3">
    <span>Stopwatch: </span>
    <span className="font-bold">{seconds.toFixed(1)}</span>
  </div>
);

//Toggle
const TimerToggle: React.FunctionComponent<{
  isActive: boolean;
  onToggle: () => void;
}> = ({ isActive, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      className="bg-blue-600 text-white p-3 mt-3 border-gray-50 rounded-lg"
    >
      {isActive ? "Stop" : "Start"}
    </button>
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
    <div className="container mx-auto text-center mt-4">
      <h1 className="text-xl ">Hooks - Prop Drilling</h1>
      <TimerDisplay seconds={seconds} />
      <TimerToggle isActive={isActive} onToggle={onToggle} />
      <Names names={names} />
    </div>
  );
}

export default App;
