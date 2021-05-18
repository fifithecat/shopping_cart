import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(
  <Auth0Provider
    domain="fifithecat.us.auth0.com"
    clientId="oXH9fyrDp7tpbUGepqOgpEIdw6oIgKk8"
    redirectUri='http://localhost:3000'
    audience='https://menu-api.example.com'  
  >
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
