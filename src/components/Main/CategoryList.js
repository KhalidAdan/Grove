import React from "react";
import data from "../../data/categories.json";

export { CategoryList };

function CategoryList() {
  return (
    <div className="mb-8">
      <div className="xs:mx-0 sm:mx-3 md:mx-6 xl:mx-20 mb-4">
        <h3 className="mt-6 text-lg">Categories</h3>
      </div>
      <ul className="flex items-center justify-between flex-wrap xs:mx-0 sm:mx-3 md:mx-6 xl:mx-20">
        {data.categories.map((obj, i) => {
          return (
            <li className="flex items-center flex-shrink-0" key={i}>
              <a href="#">
                <div>
                  <div className="rounded-full h-16 w-16 lg:h-24 lg:w-24 flex items-center justify-center bg-gray-400 shadow-lg">
                    <p className="absolute font-normal text-white z-10">
                      {obj.name}
                    </p>
                    <img
                      className="relative h-16 w-16 lg:h-24 lg:w-24 object-cover dark z-0 rounded-full"
                      src={obj.pic}
                      alt=""
                    />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
