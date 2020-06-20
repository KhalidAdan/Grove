import React from "react";

import data from "../../data/specialcategory.json";

import { CategoryList } from "./CategoryList";
import { DefinedCategoryList } from "./DefinedCategoryList";

export { Body };

function Body() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <CategoryList />
      <DefinedCategoryList data={data.offers} />
      <DefinedCategoryList data={data.snacks} />
      <DefinedCategoryList data={data.herbs} />
    </div>
  );
}
