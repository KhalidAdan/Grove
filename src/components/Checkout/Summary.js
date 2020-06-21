import React, {useContext} from 'react';
import { CartContext } from '../ShoppingCartContext';

export {Summary};

function Summary() {
    const [cart, setCart] = useContext(CartContext);
    let subtotal = cart.reduce((acc, current) => {
        return acc += (current.price * current.amount)
      }, 0);
    let tax = (subtotal * 0.13);
    let total = (subtotal + tax);
    return (
      <div className="px-10 py-6">
        <div>
          <h2 className="text-primary font-bold text-xl mb-4">Summary</h2>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Order</p>
            <p>{"$" + subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>{"$" + tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>{"$" + (total).toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  }