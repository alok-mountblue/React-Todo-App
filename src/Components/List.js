import React, { useContext } from "react";
import { listContext } from "./App";
import Itemlist from "./Itemslist";
const List = () => {
  const { items } = useContext(listContext);
  return (
    <div>
      {items.map((item) => {
        return <Itemlist item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
