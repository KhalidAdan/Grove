import React, { useContext } from "react";
import { HomeButton } from "../Common/HomeButton";
import { CheckoutHeader } from "./CheckoutHeader";
import { GoogleMapLocation } from "./GoogleMapLocation";
import { ShoppingCart } from './ShoppingCart';
import { CartContext } from "../ShoppingCartContext";

export { Checkout };

function Checkout() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      <HomeButton />
      <CheckoutHeader />
      <GoogleMapLocation />
      <div className="px-6">
        <ShoppingCart />
      </div>
      {/* <div className="bg-gray-300">
          <Summary />
          <PickupDate />
        </div> */}
    </div>
  );
}
