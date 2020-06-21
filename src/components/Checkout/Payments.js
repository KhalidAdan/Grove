import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CheckoutForm } from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51GwX7vDqcm7GnLiy8Xgal5njafZnlN7sTszSWr1GSjfB0jlP2zVRIflcbKiv47p8ypxIiZEThc8wYYlhjUReIX9Z00RmZVP3jr"
);

export { Payments };

function Payments() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
