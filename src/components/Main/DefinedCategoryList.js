import React, { useContext } from "react";
import { Route, Switch, Link, useHistory, useParams } from "react-router-dom";

import data from "../../data/categories.json";
import { CartContext } from "../ShoppingCartContext";
import { render } from "@testing-library/react";

function DefinedCategoryHeader({ title }) {
  return (
    <div className="xs:mx-0 sm:mx-3 md:mx-6 xl:mx-20 mb-4">
      <h3 className="text-lg inline-block">{title}</h3>
      <p className="text-sm text-gray-500 inline-block float-right mr-1 pt-2">
        View more
      </p>
    </div>
  );
}

function ItemCount({ item }) {
  const [cart, setCart] = useContext(CartContext);

  const isItemInCart = () => {
    let itemFound = cart.find((elem) => {
      if (elem.id === item.uuid) {
        return true;
      } else {
        return false;
      }
    });
    return itemFound;
  };

  let itemFound = isItemInCart();

  if (itemFound) {
    return (
      <div className="relative w-2 rounded-full px-4 mr-2 text-white bg-tertiary p-2 rounded  leading-none flex justify-center bottom-0">
        {itemFound.amount}
      </div>
    );
  } else {
    return <div className="h-6 py-4 mr-2 p-2"></div>;
  }
}

// List of items
function DefinedCategoryBody({ list, title }) {
  return (
    <div>
      <ul className="xs:mx-0 sm:mx-3 md:mx-6 xl:mx-20 flex flex-row overflow-x-scroll xl:overflow-auto">
        {list.map((obj, i) => {
          return (
            <li key={obj.uuid}>
              <Link to={"/item/" + obj.uuid + "/type/" + title}>
                <div className="flex justify-end pr-10 space-y-4">
                  <ItemCount item={obj} />
                </div>
                <Item
                  className="mb-2"
                  name={obj.name}
                  price={`$${obj.price}`}
                  pic={obj.pic}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <div>
      <div className="w-40 h-40 lg:w-52 lg:h-52 mr-10 lg:mr-16 last:mr-0 mb-5">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={props.pic}
          alt=""
        />
      </div>
      <p className="tracking-tight text-tertiary text-2xl font-medium">
        {props.price}
      </p>
      <p className="font-hairline w-40 lg:w-52">{props.name}</p>
    </div>
  );
}

export { DefinedCategoryList };

function DefinedCategoryList({ data }) {
  return (
    <div className="mb-8">
      <DefinedCategoryHeader title={data.title} />
      <DefinedCategoryBody {...data} />
    </div>
  );
}
