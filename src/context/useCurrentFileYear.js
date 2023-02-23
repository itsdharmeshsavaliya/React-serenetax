import React, { useState } from "react";

export const CurrentFileYearContext = React.createContext();

export const CurrentFileYearProvider = ({ children }) => {
  const today = new Date();
  const [currentFileYear, setCurrentFileYear] = useState(today.getFullYear());

  const setCurrentYear = (year) => setCurrentFileYear(year);
  return (
    <CurrentFileYearContext.Provider
      value={{ currentFileYear, setCurrentYear }}
    >
      {children}
    </CurrentFileYearContext.Provider>
  );
};

export const useCurrentFileYear = () =>
  React.useContext(CurrentFileYearContext);
