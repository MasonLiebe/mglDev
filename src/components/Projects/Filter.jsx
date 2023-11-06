import React, { useState } from "react";

// project filter component
const Filter = ({ dataCount, catList, allProjectCount, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <ul className="flex gap-6 flex-wrap">
      <li>Filter by:</li>
      {catList?.map((cat, i) => {
        return (
          <li key={i}>
            <a
              className={`cursor-pointer relative ${
                active === i ? "active" : ""
              }`}
              onClick={() => {
                setActive(i);
                filterItems(cat);
              }}
            >
              <span className="font-bold">{cat}</span>
              <span className="absolute -top-[5px] -right-[15px] text-[.7em] text-left">
                {/* print all categories name and their count */}

                {cat === "All"
                  ? allProjectCount
                  : dataCount &&
                    dataCount?.map(
                      (item) => item.category === cat && item.dataCount
                    )}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
