import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext";

export {ShoppingCart};

function ShoppingCart() {
    const [cart, setCart] = useContext(CartContext);
    
    return (
      <div>
        <div className="px-10 my-2">
          <h2 className="text-primary font-bold text-xl my-4">Shopping cart</h2>
        </div>
        <div>
          <ul>
            {cart.map((data, i) => {
              return (
                <li key={i} className="mb-4">
                  <div className="flex justify-between w-full h-24 rounded-lg border-gray-400 border-2 py-6 px-8">
                    <h3 className="flex-none font-bold text-3xl pr-6">
                      {data.amount}
                    </h3>
                    <div className="flex-1">
                      <p className="text-lg tracking-wide">{data.name}</p>
                      <div className="flex justify-left">
                        <button className="text-tertiary">Edit</button>
                        <button className="text-tertiary ml-5">Remove</button>
                      </div>
                    </div>
                    <p className="flex-none text-tertiary">
                      {"$" + data.price * data.amount}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }