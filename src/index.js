import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/css/d.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../src/css/dashboardtemplate/css/http.css'
import '../src/css/dashboardtemplate/css/styles.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
