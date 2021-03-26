import * as actionTypes from "./actionTypes";

export const addToCart = ident => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: ident
    };
};

export const addItem = newItem => {
    return {
        type: actionTypes.ADD_ITEM,
        item: newItem
    };
};

export const deleteItem = ident => {
    return {
        type: actionTypes.DELETE_ITEM,
        id: ident
    };
};

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    };
};

export const updateQuantity = (ident, newQuantity, isIncrement) => {
    return {
        type: actionTypes.UPDATE_QUANTITY,
        quantity: newQuantity,
        increment: isIncrement
    }
}


export const incrementQuantity = ident => {
    return {
        type: actionTypes.INCREMENT_QUANTITY,
        id: ident
    };
};

export const decrementQuantity = ident => {
    return {
        type: actionTypes.DECREMENT_QUANTITY,
        id: ident
    };
};

export const setQuantity = (ident, newQuantity) => {
    return {
        type: actionTypes.SET_QUANTITY,
        id: ident,
        quantity: newQuantity
    }
}

export const loadList = () => {
    console.log("in loadList");
    return {
        type: actionTypes.GET_LOAD_LIST
    }
}

export default {
    addToCart,
    addItem,
    deleteItem,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
    updateQuantity,
    clearCart,
    loadList
}