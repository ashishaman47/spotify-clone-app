//useContext, useReducer are react hooks
import React, { createContext, useContext, useReducer } from 'react';

//createContext --> it prepares data layer
export const DataLayerContext = createContext();

//actual data layer --> that wrapped the app --> it takes some props --> and children is what's wrapped inside the DataLayer Component (Here App)
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider> /*passing props */
);

//anytime i wanna and get me the value from datalayer or i wanna dispatch an action to it ---> i need to have some kind of access to it
export const useDataLayerValue = () => useContext(DataLayerContext);
