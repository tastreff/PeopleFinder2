import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/styles.css";
import "./styles/bootstrap.css";
import "./styles/fontawesome-all.css";
import "./styles/magnific-popup.css";
import "./styles/swiper.css";
import App from './components/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);