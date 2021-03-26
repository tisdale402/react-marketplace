import React from 'react';

import Item from "./Item/Item";
const Items = props => (
        <div className='items'>
            {props.items.map((item, index) =>
                <Item
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.img}
                    index={index}
                    img={item.img}
                    removeItem = {()=> props.removeItem(index)}
                    incQuantity={() => props.incrementQuantity(index)}
                    decQuantity={() => props.decrementQuantity(index)}
                    setQuantity={props.setQuantity}
                    addToCart={() => props.addToCart(index)}
                />
            )}
        </div>
    );



export default Items;

