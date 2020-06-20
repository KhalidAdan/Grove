import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  // update below line for cart retrieval
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
