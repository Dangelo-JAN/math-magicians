import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const newState = calculate(this.state, e.target.value);
    this.setState(newState);
    const displayTotal = document.getElementById('output');
    if (newState.next !== null) {
      displayTotal.innerText = newState.next;
    } else {
      displayTotal.innerText = newState.total;
    }
  }

  render() {
    return (
      <div className="g-container">
        <div className="op-container">
          <div className="output" id="output">0</div>
        </div>
        <button onClick={this.onClickHandler} type="button" value="AC"> AC </button>
        <button onClick={this.onClickHandler} type="button" value="+/-"> +/- </button>
        <button onClick={this.onClickHandler} type="button" value="%"> % </button>
        <button onClick={this.onClickHandler} type="button" value="÷" className="operation"> / </button>
        <button onClick={this.onClickHandler} type="button" value="9"> 9 </button>
        <button onClick={this.onClickHandler} type="button" value="8"> 8 </button>
        <button onClick={this.onClickHandler} type="button" value="7"> 7 </button>
        <button onClick={this.onClickHandler} type="button" value="x" className="operation"> * </button>
        <button onClick={this.onClickHandler} type="button" value="6"> 6 </button>
        <button onClick={this.onClickHandler} type="button" value="5"> 5 </button>
        <button onClick={this.onClickHandler} type="button" value="4"> 4 </button>
        <button onClick={this.onClickHandler} type="button" value="-" className="operation"> - </button>
        <button onClick={this.onClickHandler} type="button" value="3"> 3 </button>
        <button onClick={this.onClickHandler} type="button" value="2"> 2 </button>
        <button onClick={this.onClickHandler} type="button" value="1"> 1 </button>
        <button onClick={this.onClickHandler} type="button" value="+" className="operation"> + </button>
        <button onClick={this.onClickHandler} type="button" value="0" className="button-zero"> 0 </button>
        <button onClick={this.onClickHandler} type="button" value="."> . </button>
        <button onClick={this.onClickHandler} type="button" value="=" className="operation"> = </button>
      </div>
    );
  }
}

export default Calculator;
