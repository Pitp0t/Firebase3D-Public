import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/AuthContex';
import CartProvider from './context/CartContext';
import './style.css';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <React.StrictMode>
      <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
  </UserProvider>
);


