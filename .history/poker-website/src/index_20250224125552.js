import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component with React StrictMode for development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (performance)
reportWebVitals();
