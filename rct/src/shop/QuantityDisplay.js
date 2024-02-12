import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingContext';

function QuantityDisplay() {
  const { shoppingData } = useContext(ShoppingContext);

  return (
    <div style={{ backgroundColor: "#b3e3ce" }}>
      <h2>Quantity Display</h2>
      <p>Total items bought: {shoppingData.length}</p>
    </div>
  );
}

export default QuantityDisplay;
