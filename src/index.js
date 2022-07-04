import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import WebContent from './app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <WebContent />
  //</React.StrictMode>
);
