import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyAEVUgY6LKiWrN31Xqad2dFIBMatwqp_uk",
  authDomain: "itlagram-662c0.firebaseapp.com",
  databaseURL: "https://itlagram-662c0-default-rtdb.firebaseio.com",
  projectId: "itlagram-662c0",
  storageBucket: "itlagram-662c0.appspot.com",
  messagingSenderId: "354259597363",
  appId: "1:354259597363:web:a90d8f5d5edf2d8ad94b46",
  measurementId: "G-8BSSB81C26"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
