import React, { useContext } from "react";
import { Route, Switch, Link, useHistory, useParams } from "react-router-dom";

import data from "../../data/categories.json";
import { CartContext } from "../ShoppingCartContext";

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

// List of items
function DefinedCategoryBody({ list, title }) {
  return (
    <div>
      <ul className="xs:mx-0 sm:mx-3 md:mx-6 xl:mx-20 flex flex-row overflow-x-scroll xl:overflow-auto">
        {list.map((obj, i) => {
          return (
            <li key={obj.uuid}>
              <Link to={"/item/" + obj.uuid + "/type/" + title}>
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
      <div className="w-32 h-32 mr-16 lg:mr-48 last:mr-0 mb-5">
        <img
          className="h-32 w-full object-cover rounded-lg"
          src={props.pic}
          alt=""
        />
      </div>
      <p>{props.name}</p>
      <p className="tracking-tight text-tertiary">{props.price}</p>
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
