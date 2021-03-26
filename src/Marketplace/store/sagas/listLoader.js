import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import axios from "axios";
import * as actionTypes from '../actions/actionTypes';
import {put, takeLatest} from "@redux-saga/core/effects";

function* loadList() {
    console.log("In Saga loadList generator");
    const res = [];
    yield axios.get('https://marketplace-52be8-default-rtdb.firebaseio.com/items.json')
        .then(response => {
            console.log(response.data)
            for (const item in response.data) {
                console.log(item.name);
                res.push(item);
            }

        })
    console.log(res);
    yield put({type: actionTypes.LOAD_LIST, res});
    console.log("LOAD_LIST action dispatched")
}

function* loadListSE() {
    takeLatest(actionTypes.GET_LOAD_LIST, loadList);
}

export default loadList;

