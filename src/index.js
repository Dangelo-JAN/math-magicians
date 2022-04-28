import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Calculator from './components/calculator';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
