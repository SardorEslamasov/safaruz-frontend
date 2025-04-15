import React, { createContext, useState } from "react";

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);

  return (
    <TourContext.Provider value={{ tours, setTours }}>
      {children}
    </TourContext.Provider>
  );
};
