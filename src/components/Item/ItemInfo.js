import React, { useContext, useState } from "react";
import { CartContext } from "../ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function ItemDescription({ desc }) {
  return (
    <div className="mt-6 px-6">
      <p className="text-gray-500 text-sm mt-6">{desc}</p>
    </div>
  );
}

function ItemHeader({ uuid, name, amount, price, link }) {
  // set up context
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(0);

  const isItemInCart = () => {
    let itemFound = cart.find((elem) => {
      if ( elem.id === uuid ) {
        return true;
      } else {
        return false;
      }
    });
    return itemFound;
  }

  const addToCart = () => {
    // check to see if this item's id is in the cart
    if (isItemInCart()) {// if yes update value
      let newCart = cart.map((elem) => {
        if (elem.id === uuid && elem.amount < 100) {
          elem.amount++;
          console.log(elem.amount);
          setCount((count) => elem.amount);
        }
        return elem;
      });
      updateCart(newCart);
    } else {
      setCount(1);
      setCart((cart) => [...cart, {
        id: uuid, 
        name: name, 
        amount: amount + 1, 
        price: price,
        link: link
      }]);
    }
    

    // if no add to cart
  };

  const removeFromCart = () => {
    // check to see if this item's id is in the cart
    let newCart = cart.map((elem) => {
      if (elem.id === uuid && elem.amount > 0) {
        elem.amount--;
        console.log(elem.amount);
        setCount((count) => elem.amount);
      }
      return elem;
    });
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

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
            onClick={addToCart}
          >
            <FontAwesomeIcon className="text-xs" icon={faPlus} />
          </button>
          <span className="text-lg font-semibold w-3">{count}</span>
          <button
            className="rounded-lg bg-white border-gray-500  border-2 px-3 ml-4"
            onClick={removeFromCart}
          >
            <FontAwesomeIcon className="text-xs" icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
}

export { ItemInfo };

function ItemInfo({ uuid, name, amount, price, link, desc }) {
  return (
    <div>
      <ItemHeader uuid={uuid} name={name} price={price} amount={amount ?? 0} link={link ?? ""} />
      <ItemDescription desc={desc} />
    </div>
  );
}
