import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const WithProvider = ({ children }) => {
  return <BrowserRouter basename="/">{children}</BrowserRouter>;
};
