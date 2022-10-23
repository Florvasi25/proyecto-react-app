import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJqdb9ed1OJ-nUh-bHqlqH4GcUq4RVMCA",
  authDomain: "coderhouse-ecommerce-c86c7.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c86c7",
  storageBucket: "coderhouse-ecommerce-c86c7.appspot.com",
  messagingSenderId: "902712844886",
  appId: "1:902712844886:web:603335dc9e603a166951f7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
