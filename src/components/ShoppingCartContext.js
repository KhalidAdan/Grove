import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  // retrieve cart from localStorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? []);
  // watch cart for changes, when changed update localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
