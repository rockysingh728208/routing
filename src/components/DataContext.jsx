// src/context/DataContext.js
import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formList, setFormList] = useState([]); 

  const addData = (data) => {
    setFormList((prev) => [...prev, data]); 
  };

  return (
    <DataContext.Provider value={{ formList, addData }}>
      {children}
    </DataContext.Provider>
  );
};
