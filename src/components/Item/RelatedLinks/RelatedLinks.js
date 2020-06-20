import React from "react";
import relatedItems from "../../../data/relateditems.json";

function RelatedItemsHeader() {
  return <h3 className="text-2xl text-primary font-normal">Related items</h3>;
}

function RelatedItems() {
  return (
    <div className="h-56 mt-6 px-6">
      <RelatedItemsHeader />
      <ul className="flex flex-row overflow-x-scroll xl:overflow-auto">
        {relatedItems.related.map((data, i) => {
          return (
            <li
              className="flex items-center flex-shrink-0 mr-6 sm:mr-8 md:mr-12 xl:mr-20 mb-8"
              key={data.uuid}
            >
              <a href="#">
                <div className="w-32 rounded-lg">
                  <img
                    className="relative lg:w-24 object-cover rounded-lg"
                    src={"/" + data.pic}
                    alt=""
                  />
                  <p className="text-lg">{data.name}</p>
                  <p className="text-tertiary">{data.price}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { RelatedLinks };

function RelatedLinks() {
  return (
    <div>
      <RelatedItems/>
    </div>
  );
}
