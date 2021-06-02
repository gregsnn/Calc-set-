import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div>
      <h1>Calc(set)</h1>
      <Calculator />
    </div>
  ,document.getElementById('root')
);
reportWebVitals();
