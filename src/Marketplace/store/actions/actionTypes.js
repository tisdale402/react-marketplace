export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const SET_QUANTITY = 'SET_QUANTITY';
export const LOAD_LIST = 'LOAD_LIST';
export const GET_LOAD_LIST = 'GET_LOAD_LIST';
export const SET_LOAD_LIST = 'SET_LOAD_LIST';

export const getLoadList = () => ({type: GET_LOAD_LIST});
export const setLoadList = (list) => ({type: SET_LOAD_LIST, list});
