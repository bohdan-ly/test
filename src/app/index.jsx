import { Routes } from 'pages/routes';
import React, { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes />
    </Suspense>
  );
};

export default App;
