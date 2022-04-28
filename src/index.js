import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Calculator from './components/calculator';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Route path="/calculator">
        <Calculator />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
