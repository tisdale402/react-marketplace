import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';

import {applyMiddleware, createStore} from "redux";
import * as sideEffects from './Marketplace/store/sagas/listLoader';
import marketplaceReducer from './Marketplace/store/reducers/marketplaceReducer';
import {Provider} from "react-redux";
import "regenerator-runtime/runtime";
import reportWebVitals from './reportWebVitals';
import createSageMiddleware from "redux-saga";

const loadListMiddleware = createSageMiddleware();

const store = createStore(marketplaceReducer,{}, applyMiddleware(loadListMiddleware));
Object.values(sideEffects).forEach(loadListMiddleware.run.bind(loadListMiddleware));
//loadListMiddleware.run(loadList);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
