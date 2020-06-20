import React from 'react';
import {HomeButton} from "../Common/HomeButton";
import {CheckoutHeader} from "./CheckoutHeader";
import {GoogleMapLocation} from "./GoogleMapLocation";

export { Checkout };

function Checkout() {
    return (
      <div>
        <HomeButton />
        <CheckoutHeader />
        <GoogleMapLocation />
        {/* <div className="px-2">
        <ShoppingCart />
        </div>
        <div className="bg-gray-300">
          <Summary />
          <PickupDate />
        </div> */}
      </div>
    );
  }
  