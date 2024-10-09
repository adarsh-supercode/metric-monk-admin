"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    data: null,
  });

  return (
    <GlobalContext.Provider value={{ ...globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};
