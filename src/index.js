import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Quote from './pages/quote';
import Calculator from './components/calculator';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route>
        <Navbar path="*" />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
