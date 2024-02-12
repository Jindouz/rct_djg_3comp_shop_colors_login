import React from 'react';

export const ShoppingContext = React.createContext();

export function ShoppingProvider({ children }) {
  const [shoppingData, setShoppingData] = React.useState([]);

  return (
    <ShoppingContext.Provider value={{ shoppingData, setShoppingData }}>
      {children}
    </ShoppingContext.Provider>
  );
}
