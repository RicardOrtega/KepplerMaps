import React from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import ReactDOM from 'react-dom/client';

import App from './app';

import keplerGlReducer from "@kepler.gl/reducers";
import {taskMiddleware} from "react-palm/tasks";


const reducer = combineReducers({
    keplerGl: keplerGlReducer,

});

 const store = createStore(reducer,{},applyMiddleware(taskMiddleware));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

