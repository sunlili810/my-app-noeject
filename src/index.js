import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import jquery from "jquery";
import './index.css';
import App from './App.jsx';
// import * as serviceWorker from './serviceWorker';

window.jquery = jquery;
window.$ = jquery;
ReactDOM.render(
  <BrowserRouter basename="">
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
