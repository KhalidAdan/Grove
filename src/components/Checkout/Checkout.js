import React from "react";
import { HomeButton } from "../Common/HomeButton";
import { CheckoutHeader } from "./CheckoutHeader";
import { GoogleMapLocation } from "./GoogleMapLocation";
import { ShoppingCart } from "./ShoppingCart";
import { Summary } from "./Summary";
import { PickupTimes } from "./PickupTimes";
import { Payments } from "./Payments";

export { Checkout };

function Checkout() {
  return (
    <div className="xl:px-120">
      <HomeButton />
      <CheckoutHeader />
      <GoogleMapLocation />
      <div className="md:-mx-12 px-6">
        <ShoppingCart />
      </div>
      <div className="bg-gray-300 mb-6 px-10 py-6">
        <Summary />
        <PickupTimes />
        <Payments />
      </div>
    </div>
  );
}
