import React, { useState, createContext, useContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useInterval } from "react-use";

interface ApplicationState {
  seconds: number;
  isActive: boolean;
  names?: string[];
  onToggle: () => void;
}

const ApplicationContext = createContext<ApplicationState>({
  seconds: 0,
  isActive: false,
  onToggle: () => {},
});

const useApplicationState = (): ApplicationState => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { data } = useQuery<{
    names: string[];
  }>("names", () => fetch("/names.json").then((res) => res.json()), {
    enabled: seconds > 2,
  });

  useInterval(() => setSeconds((seconds) => seconds + 0.1), isActive ? 100 : null);

  return {
    seconds,
    isActive,
    onToggle: () => setIsActive((isActive) => !isActive),
    names: data?.names,
  };
};

const queryClient = new QueryClient();

const StopwatchContextProvider: React.FunctionComponent = ({ children }) => <ApplicationContext.Provider value={useApplicationState()}>{children}</ApplicationContext.Provider>;

export const ApplicationContextProvider: React.FunctionComponent = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <StopwatchContextProvider>{children}</StopwatchContextProvider>
  </QueryClientProvider>
);

export const useApplicationContext = () => useContext(ApplicationContext);
