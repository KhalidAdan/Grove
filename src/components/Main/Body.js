import React, { useContext } from "react";

import categoryData from "../../data/specialcategory.json";

import { CategoryList } from "./CategoryList";
import { DefinedCategoryList } from "./DefinedCategoryList";

import {CartContext} from '../ShoppingCartContext';

export { Body };

function Body() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <CategoryList />
      {categoryData.data.map( (element, i) => {
        return <DefinedCategoryList key={i} data={element} />;
      } )}
    </div>
  );
}
