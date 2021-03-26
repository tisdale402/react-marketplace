import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    itemList: [],
    totalPrice: 0
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM: return {...state, itemList: state.itemList.concat(action.item)};

        case actionTypes.DELETE_ITEM:
            const deleteItems = [...state.itemList];
            deleteItems.splice(action.id, 1);
            return {
                ...state,
                itemList: deleteItems
            };

        case actionTypes.INCREMENT_QUANTITY:
            const item = {
                ...state.itemList[action.id]
            }
            item.quantity = ++item.quantity;

            const newItemList = [...state.itemList];
            newItemList[action.id] = item;

            return {
                ...state,
                itemList: newItemList
            };

        case actionTypes.DECREMENT_QUANTITY:
            const nItem = {
                ...state.itemList[action.id]
            }
            console.log(action.id);
            console.log(nItem);
            nItem.quantity = --nItem.quantity;
            console.log(nItem.quantity);

            const nItemList = [...state.itemList];
            nItemList[action.id] = nItem;

            return {
                ...state,
                itemList: nItemList
            };

        case actionTypes.ADD_TO_CART:
            const itemToCart = {
                ...state.itemList[action.id]
            };

            const newPrice = state.totalPrice+(itemToCart.price*itemToCart.quantity);

            const newItemToCart = {
                ...itemToCart
            };

            newItemToCart.quantity = 0;

            const myItemList = [...state.itemList];
            myItemList[action.id] = newItemToCart;

            return {
                itemList: myItemList,
                totalPrice: newPrice
            };

        case actionTypes.CLEAR_CART: return{...state, totalPrice: 0}
        // case actionTypes.UPDATE_QUANTITY:
        //     const uItemList = [...state.itemList];
        //     const uItem = {
        //         ...uItemList[action.id]
        //     };
        //
        //     if(!action.increment) uItem.quantity = --uItem.quantity;
        //     else if(action.increment) uItem.quantity = ++uItem.quantity;
        //     else{
        //         uItem.quantity = action.quantity;
        //     }
        //
        //     uItemList[action.id] = uItem;
        //     return{
        //         ...state,
        //         itemList: uItemList
        //     }

        case actionTypes.SET_QUANTITY:
            const qItem = {
                ...state.itemList[action.id]
            }
            if(action.quantity > 0) qItem.quantity = action.quantity;
            else qItem.quantity = 0;

            const items = [...state.itemList];
            items[action.id] = qItem;
            return{
                ...state,
                itemList: items
            }

        case actionTypes.LOAD_LIST:
            return{
                ...state,
                itemList: action.res
            }
    }

    return state
}

export default reducer;
