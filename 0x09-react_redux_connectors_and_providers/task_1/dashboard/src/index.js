import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App/App.js';
import {Provider} from "react-redux";
import { createStore } from "redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";
import "./index.css";
const store = createStore(uiReducer, Map(initialState));
const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
 <App />
</Provider>
);
