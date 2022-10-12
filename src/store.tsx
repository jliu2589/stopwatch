import { useState, useEffect } from "react";

interface ApplicationState {
  seconds: number;
  isActive: boolean;
  names?: string[];
  onToggle: () => void;
}

export const useApplicationState = (): ApplicationState => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState<{
    names: string[];
  }>();

  //Stop Watch
  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  //Fetch
  useEffect(() => {
    if (seconds > 2) {
      console.log("more than 2 seconds");
      fetch("/names.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [seconds > 2]);

  return {
    seconds,
    isActive,
    onToggle: () => setIsActive((isActive) => !isActive),
    names: data?.names,
  };
};
