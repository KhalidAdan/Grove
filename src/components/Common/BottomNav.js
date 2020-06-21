import React, { useContext } from "react";
import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../ShoppingCartContext";

export { BottomNav };

function BottomNav() {
  const [cart, setCart] = useContext(CartContext);
  
  let total = cart.reduce((acc, current) => {
    return acc += (current.price * current.amount)
  }, 0).toFixed(2);
  
  return (
    <div className="fixed flex justify-center items-center bottom-0 h-20 w-full bg-white">
      <Link to="/checkout">
        <button className="flex-1 rounded-lg text-white bg-tertiary w-48 p-3 m-3 ml-20">
          Checkout
        </button>
      </Link>
      <div className=" flex justify justify-between lg:mr-20">
        <FontAwesomeIcon
          className="inline-block mx-3 mt-1"
          icon={faShoppingCart}
        />
        <p className="inline-block text-tertiary font-semibold text-xl mr-2">
          ${total}
        </p>
      </div>
    </div>
  );
}