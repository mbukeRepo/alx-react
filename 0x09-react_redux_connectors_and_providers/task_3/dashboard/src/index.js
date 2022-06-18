import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App/App.js';
import {Provider} from "react-redux";
import { createStore, compose } from "redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";
import thunk from "redux-thunk";
import "./index.css";

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(uiReducer, Map(initialState), combineEnhancers(applyMiddleware(thunk)));
const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
 <App />
</Provider>
);
