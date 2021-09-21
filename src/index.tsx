import './global/global';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
);
