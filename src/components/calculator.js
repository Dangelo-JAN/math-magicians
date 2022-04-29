import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [objCalculator, setObjCalculator] = useState({ total: null, next: null, operation: null });
  const displayTotal = document.getElementById('output');

  const onClickHandler = (e) => {
    const newState = calculate(objCalculator, e.target.value);
    setObjCalculator(newState);
    if (newState.next !== null) {
      displayTotal.innerText = newState.next;
    } else {
      displayTotal.innerText = newState.total;
    }
  };

  return (
    <div className="container">
      <div className="title">
        Let&apos;s do some math!
      </div>
      <div className="g-container">
        <div className="op-container">
          <div className="output" id="output">0</div>
        </div>
        <button onClick={onClickHandler} type="button" value="AC"> AC </button>
        <button onClick={onClickHandler} type="button" value="+/-"> +/- </button>
        <button onClick={onClickHandler} type="button" value="%"> % </button>
        <button onClick={onClickHandler} type="button" value="÷" className="operation"> / </button>
        <button onClick={onClickHandler} type="button" value="9"> 9 </button>
        <button onClick={onClickHandler} type="button" value="8"> 8 </button>
        <button onClick={onClickHandler} type="button" value="7"> 7 </button>
        <button onClick={onClickHandler} type="button" value="x" className="operation"> * </button>
        <button onClick={onClickHandler} type="button" value="6"> 6 </button>
        <button onClick={onClickHandler} type="button" value="5"> 5 </button>
        <button onClick={onClickHandler} type="button" value="4"> 4 </button>
        <button onClick={onClickHandler} type="button" value="-" className="operation"> - </button>
        <button onClick={onClickHandler} type="button" value="3"> 3 </button>
        <button onClick={onClickHandler} type="button" value="2"> 2 </button>
        <button onClick={onClickHandler} type="button" value="1"> 1 </button>
        <button onClick={onClickHandler} type="button" value="+" className="operation"> + </button>
        <button onClick={onClickHandler} type="button" value="0" className="button-zero"> 0 </button>
        <button onClick={onClickHandler} type="button" value="."> . </button>
        <button onClick={onClickHandler} type="button" value="=" className="operation"> = </button>
      </div>
    </div>
  );
};

export default Calculator;
