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
    const timer = setInterval(() => {
      (seconds) => {
        seconds + 0.1;
      };
    }, 100);

    if (isActive) {
      setSeconds(timer);
    }
    if (isActive === false) {
      clearInterval(timer);
    }
  }, [isActive]);

  //Fetch
  useEffect(() => {
    if (seconds > 2) {
      fetch("./names.json")
        .then((res) => res.json())
        .then((data) => setData);
    }
  }, [seconds > 2]);

  return {
    seconds,
    isActive,
    onToggle: () => setIsActive((isActive) => !isActive),
    names: data?.names,
  };
};
