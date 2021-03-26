import React, {Fragment, useEffect} from 'react';
import Items from './Items/Items';
import {connect} from 'react-redux';
import CustomizedDialogs from "./Items/ItemForm/Itemform";
import * as actionCreators from './store/actions/index';
import './Marketplace.css';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {bindActionCreators} from "redux";

const MarketPlace = (props) => {
    const {actions, itemList, totalPrice} = props;
    // const itemList = useSelector(state => state.itemList);
    // const state = useSelector(state => state);

    // console.log("Redux Store: ")
    // console.log(state);
    // console.log("ItemList in Redux Store: ");
    // console.log(itemList);



    useEffect(() => {
        console.log("In useEffect");
        actions.marketActions.loadList();
    }, []);
    //  const totalPrice = useSelector(state => state.totalPrice);
    //  const dispatch = useDispatch();


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
              <button onClick={actions.marketActions.clearCart}>Clear cart</button>
              {/*<button onClick={() => dispatch(actionCreators.loadList())}>Load Items</button>*/}
              <div className='total-price'>Total:${totalPrice}</div>
              <Items
                items={itemList||[]}
                //updateQuantityHandler={updateQuantityHandler}
                removeItem={actions.marketActions.deleteItem}
                incrementQuantity={actions.marketActions.incrementQuantity}
                decrementQuantity={actions.marketActions.decrementQuantity}
                setQuantity={(id, newQuantity) => actions.marketActions.setQuantity(id, newQuantity)}
                addToCart={actions.marketActions.addToCart}
              />
              <CustomizedDialogs
              onAddItem={actions.marketActions.addItem}
             />
          </div>
          <footer>Alex Tisdale</footer>
      </Fragment>
    );
}
const mapStateToProps = state => {
    return {
        itemList: state.itemList,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            marketActions: bindActionCreators(actionCreators, dispatch)
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);
//export default MarketPlace;