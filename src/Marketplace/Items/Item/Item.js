import React from 'react';

import '../../Marketplace.css';

const Item = (props) => {
    const {name, price, quantity, incQuantity, decQuantity, addToCart, img, setQuantity, index, removeItem} = props;

    return(
        <div className="item">
            <button onClick={removeItem} className='delete-btn'>Delete Item</button>
            <img src ={img} alt = ''/>
            {name}<br/>
            ${price}<br/>
            <input
                type='text'
                className='quantity'
                value={quantity}
                onChange={event => {
                    setQuantity(index, event.target.value)
                }}
            />
            <button onClick={incQuantity} className='quantity-btn'>+</button>
            <button onClick={decQuantity} className='quantity-btn'>-</button>
            <button onClick={addToCart}>Add item to cart</button>
            <br/>
        </div>
    );
}

export default Item;