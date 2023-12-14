import React from 'react';
import { WithProvider } from './withProvider';
import WithLayout from './withLayout';

const ConnectProviders = ({ children }) => {
  return (
    <WithProvider>
      <WithLayout>{children}</WithLayout>
    </WithProvider>
  );
};

export default ConnectProviders;
