import React, {Fragment} from 'react';
//import axios from "axios";
import Items from './Items/Items';
import {useSelector, useDispatch} from 'react-redux';
import CustomizedDialogs from "./Items/ItemForm/Itemform";
import * as actionCreators from './store/actions/index';
import './Marketplace.css';

const MarketPlace = () => {

    const itemList = useSelector(state => state.itemList);
    const state = useSelector(state => state);

    console.log("Redux Store: ")
    console.log(state);
    console.log("ItemList in Redux Store: ");
    console.log(itemList);



    // useEffect(() => {
    //     // axios.get('https://marketplace-52be8-default-rtdb.firebaseio.com/items.json')
    //     //     .then(response => {
    //     //         console.log(response);
    //     //         //dispatch((response) => actionCreators.loadList(response));
    //     //     })
    //
    // }, []);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();


    //default values
    //if increment is false first, always sub 1
    //if true, adding one from default if newQuantity is not passed

    //Make a function with duplicate parts
    //pass in another function/ call a function depending on whether its incrementing or decrement
    //or adding value that is passed
    // const updateQuantityHandler = (id, newQuantity, isIncrement) =>{
    //     const item = {
    //         ...itemList[id]
    //     }
    //
    //     if(newQuantity) item.quantity=Math.abs(newQuantity)
    //     else if(isIncrement) item.quantity++;
    //     else {
    //         if(item.quantity>0) item.quantity--;
    //         else item.quantity = 0;
    //     }
    //
    //     const items = [...itemList];
    //     items[id] = item;
    //
    //     setItemList(items);
    // }

    return(
      <Fragment>
          <header>Marketplace</header>
          <div className='marketplace'>
              <button onClick={() => dispatch(actionCreators.clearCart())}>Clear cart</button>
              <button onClick={() => dispatch(actionCreators.loadList())}>Load Items</button>
              <div className='total-price'>Total:${totalPrice}</div>
              <Items
                items={itemList}
                //updateQuantityHandler={updateQuantityHandler}
                removeItem={(id) => dispatch(actionCreators.deleteItem(id))}
                incrementQuantity={(id) => dispatch(actionCreators.incrementQuantity(id))}
                decrementQuantity={(id) => dispatch(actionCreators.decrementQuantity(id))}
                setQuantity={(id, newQuantity) => dispatch(actionCreators.setQuantity(id, newQuantity))}
                addToCart={(id) => dispatch(actionCreators.addToCart(id))}
              />
              <CustomizedDialogs
              onAddItem={(item) => dispatch(actionCreators.addItem(item))}
             />
          </div>
          <footer>Alex Tisdale</footer>
      </Fragment>
    );
}

export default MarketPlace;