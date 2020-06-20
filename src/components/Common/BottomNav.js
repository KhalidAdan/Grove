import React from "react";
import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export { BottomNav };

function BottomNav() {
  return (
    <div className="flex justify-center items-center bottom-0 h-20 w-full bg-white sticky">
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
          $39.90
        </p>
      </div>
    </div>
  );
}