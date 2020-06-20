import React from "react";

export {ItemImage};

  function ItemImage({pic}) {
  
    return (
      <img
        className="h-64 lg:h-auto w-full object-cover rounded-lg xl:h-120"
        src={"/" + pic}
        alt="An avocado"
      />
    );
  }