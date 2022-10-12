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

  return {
    seconds,
    isActive,
    onToggle: () => setIsActive((isActive) => !isActive),
    names: data?.names,
  };
};
