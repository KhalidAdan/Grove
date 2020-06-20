import React from "react";

export { Header };

function Header() {
  return (
    <div className="h-64 flex justify-center">
      <div className="absolute p-5 text-opacity-100 mt-16 z-10 xl:px-64 xl:w-full lg:w-full lg:px-32 ">
        <h1 className="font-semibold text-2xl text-white hover:text-gray-400">
          Fresh Food Grocers
        </h1>
        <h2 className="text-lg text-white hover:text-gray-400 mb-5">
          Serving the Ottawa community for 25 years!
        </h2>
        <div className="flex">
            <input
            className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
            id="search-all-food"
            type="text"
            placeholder="Search..."
            />
        </div>
      </div>
      <img
        className="h-64 w-full object-cover dark z-0"
        src="assets\images\food-1932466_1920.jpg"
        alt=""
      />
    </div>
  );
}