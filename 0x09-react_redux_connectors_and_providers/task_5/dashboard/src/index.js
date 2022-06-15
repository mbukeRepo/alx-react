import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import {Provider} from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import rootReducer, { initialState } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import "./index.css";

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
export const store = createStore(
  combineReducers(rootReducer), 
  initialState, 
  combineEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
,document.getElementById('root')
);
