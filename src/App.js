import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/calculator">
        <Calculator />
      </Route>
    </BrowserRouter>
  );
}

export default App;
