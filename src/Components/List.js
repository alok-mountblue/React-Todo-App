import React from "react";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <i
              className="far fa-edit add-btn"
              style={{ color: "blue" }}
              onClick={() => editItem(id)}
            ></i>
            <i
              className="far fa-trash-alt add-btn"
              style={{ color: "red" }}
              onClick={() => removeItem(id)}
            ></i>
          </div>
        );
      })}
    </div>
  );
};

export default List;
