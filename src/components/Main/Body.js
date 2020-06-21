import React, { useContext } from "react";

import categoryData from "../../data/specialcategory.json";

import { CategoryList } from "./CategoryList";
import { DefinedCategoryList } from "./DefinedCategoryList";

import {CartContext} from '../ShoppingCartContext';

export { Body };

function Body() {
  return (
    <div className="w-full px-6 sm:px-16 md:px-32 lg:px-64 xl:px-120">
      <CategoryList />
      {categoryData.data.map( (element, i) => {
        return <DefinedCategoryList key={i} data={element} />;
      } )}
    </div>
  );
}
