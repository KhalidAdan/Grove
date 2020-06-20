import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faPlus,
    faMinus,
  } from "@fortawesome/free-solid-svg-icons";

function ItemDescription({desc}) {
  return (
    <div className="mt-6 px-6">
      <p className="text-gray-500 text-sm mt-6">{desc}</p>
    </div>
  );
}

function ItemHeader({name, price}) {
  
  const [cart, setCart] = useContext(CartContext);
  
  console.log(cart);
  const AddToCart = () => {
    setCart(cart => [...cart, {
        id: "486336f-3da3-4190-bfef-0e6d80eea582",
        name: "Avocado",
        amount: 3,
        price: 3.99,
        link: "/item/",
      }]);
  }
    
  return (
    <div className="mt-6 px-6">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-4xl text-primary font-bold tracking-wide">
            {name}
          </h1>
          <h2 className="text-tertiary text-xl font-normal tracking-wide">
            {price}
          </h2>
        </div>
        <div className="flex items-center">
          <button
            className="rounded-lg bg-white border-gray-500  border-2 px-3 mr-3"
            onClick={AddToCart}
          >
            <FontAwesomeIcon className="text-xs" icon={faPlus} />
          </button>
          <span className="text-lg font-semibold w-3">12</span>
          <button
            className="rounded-lg bg-white border-gray-500  border-2 px-3 ml-4"
          >
            <FontAwesomeIcon className="text-xs" icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
}

export {ItemInfo};

function ItemInfo({name, price, desc}) {
    return (
        <div>
            <ItemHeader name={name} price={price}/>
            <ItemDescription desc={desc} />
        </div>
    )
}
