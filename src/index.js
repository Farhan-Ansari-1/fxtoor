import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Ensure we are importing the App component with the router

const root = ReactDOM.createRoot(document.getElementById('root'));

// This is the entry point of your application.
// It should render the main App component which now contains the Header, Footer, and Routes.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
