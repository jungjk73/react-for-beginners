import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import TodoList from './TodoList';
//import CoinTracker from './CoinTracker';

//console.log("start index.js");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
    //<TodoList/>
    //<CoinTracker/>
    
  // </React.StrictMode>
);
//console.log("end index.js");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
