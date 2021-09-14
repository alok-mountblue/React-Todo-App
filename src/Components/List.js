import React from "react";
import ListItem from "./ListItem";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <ListItem item={item} removeItem={removeItem} editItem={editItem} />
        );
      })}
    </div>
  );
};

export default List;
