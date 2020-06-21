import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "./CardSectionStyles.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export { CardSection };

function CardSection() {
  return (
    <label className="text-primary font-bold text-xl">
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} className="mt-4" />
    </label>
  );
}
