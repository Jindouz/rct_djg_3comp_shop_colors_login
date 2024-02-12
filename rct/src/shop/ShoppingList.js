import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingContext';

function ShoppingList() {
  const { shoppingData, setShoppingData } = useContext(ShoppingContext);

  const Buy = (item) => {
    setShoppingData([...shoppingData, item]);
  };

  const availableItems = [
    { id: 1, name: 'Eggs', price: 3 },
    { id: 2, name: 'Milk', price: 4 },
    { id: 3, name: 'Bread', price: 2 },
];

  return (
    <div style={{ backgroundColor: "#53d99f" }}>
      <h2>Shopping List</h2>
      <ul>
        {availableItems.map(item => (
          <li key={item.id}>
            {item.name}{" "} - {item.price + '$'}{" "}
            <button onClick={() => Buy(item)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
