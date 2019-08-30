import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { userReducer } from './reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(userReducer, applyMiddleware(thunk, logger));

console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  rootElement
);