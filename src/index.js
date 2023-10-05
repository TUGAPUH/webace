import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);