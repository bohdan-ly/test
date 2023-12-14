import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ConnectProviders from './app/providers/index.jsx';
import App from './app/index.jsx';

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <ConnectProviders>
      <App />
    </ConnectProviders>
  </React.StrictMode>,
);
