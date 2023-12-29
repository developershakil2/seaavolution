import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextComponent from './utilities/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextComponent>

    <React.StrictMode>
    <App />
  </React.StrictMode>
   

  </ContextComponent>

);

reportWebVitals();
