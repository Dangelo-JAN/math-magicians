import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Quote from './pages/quote';
import Calculator from './components/calculator';

import './index.css';

ReactDOM.render(
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
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
