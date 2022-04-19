import React, { Component } from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="g-container">
        <div className="op-container">
          <div className="output">0</div>
        </div>
        <button type="button"> AC </button>
        <button type="button"> +/- </button>
        <button type="button"> % </button>
        <button type="button" className="operation"> / </button>
        <button type="button"> 9 </button>
        <button type="button"> 8 </button>
        <button type="button"> 7 </button>
        <button type="button" className="operation"> * </button>
        <button type="button"> 6 </button>
        <button type="button"> 5 </button>
        <button type="button"> 4 </button>
        <button type="button" className="operation"> - </button>
        <button type="button"> 3 </button>
        <button type="button"> 2 </button>
        <button type="button"> 1 </button>
        <button type="button" className="operation"> + </button>
        <button type="button" className="button-zero"> 0 </button>
        <button type="button"> . </button>
        <button type="button" className="operation"> = </button>
      </div>
    );
  }
}

export default Calculator;
