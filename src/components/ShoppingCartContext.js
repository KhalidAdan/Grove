import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  // update below line for cart retrieval
  const [cart, setCart] = useState([
    {
      id: "486336f-3da3-4190-bfef-0e6d80eea582",
      name: "Avocado",
      amount: 3,
      price: 3.99,
      link: "/item/",
    },
    {
      id: "fa4072a4-862c-494f-8088-168f61ad0be5",
      name: "Ritz Crackers",  
      amount: 4,
      price: 3.99,
      link: "/item/",
    },
    {
      id: "454b3d67-7ad3-4576-9ba3-315a985e97c3",
      name: "Sirloin Steak",
      amount: 11,
      price: 3.99,
      link: "/item/",
    },
  ]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
