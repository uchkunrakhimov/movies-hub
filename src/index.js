import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import './assets/sass/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage />
  </React.StrictMode>
);