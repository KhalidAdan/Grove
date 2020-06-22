import React, { useContext } from "react";
import roundTo from "round-to";
import { CartContext } from "../ShoppingCartContext";

export { Summary };

function Summary() {
  const [cart] = useContext(CartContext);

  const HANDLING_FEE_CENTS = 0.45;
  const HANDLING_FEE_PERCENT = 0.05;
  const GST_HST = 0.13;

  const calculateSubtotal = () => {
    let amount = cart.reduce((acc, curr) => {
      return roundTo.up(
        parseFloat(acc) + parseFloat(curr.price * curr.amount),
        2
      );
    }, 0);
    return amount;
  };

  const calculateTax = (amount) => {
    let tax = roundTo.up(amount * GST_HST, 2);
    return tax;
  };

  const calculateFees = (amount) => {
    let fees = roundTo.up(amount * HANDLING_FEE_PERCENT + HANDLING_FEE_CENTS, 2);
    return fees;
  };

  const calculateTotal = (subtotal, tax, fees) => {
    let total = subtotal + tax + fees;
    return total;
  };
  
  let subtotal = calculateSubtotal();
  let tax = calculateTax(subtotal);
  let fees = calculateFees(subtotal);
  let total = calculateTotal(subtotal, tax, fees);

  return (
    <div>
      <div>
        <h2 className="text-primary font-bold text-xl mb-4">Summary</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>Order</p>
          <p>{"$" + subtotal }</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>{"$" + tax }</p>
        </div>
        <div className="flex justify-between">
          <p>Fees</p>
          <p>{"$" + fees }</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{ "$" + total }</p>
        </div>
      </div>
    </div>
  );
}
