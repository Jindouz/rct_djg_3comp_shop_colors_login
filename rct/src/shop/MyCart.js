import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingContext';

function MyCart() {
    const { shoppingData, setShoppingData } = useContext(ShoppingContext);

    // Remove item
    const Remove = (item) => {
        shoppingData.splice(shoppingData.indexOf(item), 1);
        //refresh cart
        setShoppingData([...shoppingData]);
    }
    return (
        <div style={{ backgroundColor: "#38cd8c" }}>
            <h2>My Cart</h2>
            <ul>
                {shoppingData.map(item => (
                    <li key={item.id}>{item.name} - {item.price}$ <button onClick={() => Remove(item)}>Remove</button></li>
                ))}
            </ul>
        </div>
    );
}

export default MyCart;
