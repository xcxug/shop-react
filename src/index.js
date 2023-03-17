import 'babel-polyfill'; // es6转es5兼容ie
import 'url-search-params-polyfill'; // 让ie支持new URLSearchParams()
import 'whatwg-fetch'; // 让ie支持fetch()请求接口
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './assets/js/libs/zepto.js';
import './assets/css/common/public.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
