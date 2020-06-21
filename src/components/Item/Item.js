import React, { useContext, useState } from "react";

import { BottomNav } from "../Common/BottomNav";
import { HomeButton } from "../Common/HomeButton";
import { CartContext } from "../ShoppingCartContext";
import { ItemImage } from "./ItemImage";
import { ItemInfo } from "./ItemInfo";
import { RelatedLinks } from "./RelatedLinks/RelatedLinks";

import specialData from "../../data/specialcategory.json";
import { useParams } from "react-router-dom";

function findItemById(uuid, type) {
  // y I K ES this is janky
  return specialData.data
    .find((elem) => elem.title === type)
    .list.find((element) => element.uuid === uuid);
}


export { Item };

function Item() {

  let { uuid, title } = useParams();
  let item = findItemById(uuid, title);
  

  const [cart, setCart] = useContext(CartContext);
  const [currentItem, setCurrentItem] = useState(item);

  return (
    <div>
      <HomeButton />
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <ItemImage {...item} />
        <ItemInfo uuid={item.uuid} name={item.name} price={item.price} link={item.link ?? "/link/"} desc={item.desc} />
        <RelatedLinks />
      </div>
      <BottomNav />
    </div>
  );
}
