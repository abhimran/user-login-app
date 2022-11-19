/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserAuthContextProvider } from './context/UserAuthContext';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router>
        <App />
      </Router>
    </UserAuthContextProvider>
  </React.StrictMode>
);
