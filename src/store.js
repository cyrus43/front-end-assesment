import React, { createContext, useReducer } from 'react';

const initialState = {
  count: 0,
  text: '',
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };

      case 'decrement':
        return { ...state, count: state.count - 1 };

      case 'update_details':
        return { ...state, ...action.payload };

      default:
        return state;
    }
  }, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
