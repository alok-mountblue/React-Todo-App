import React, {useContext} from 'react';
import { listContext } from './App';

const Itemlist = ({ item }) => {
  const { id, title } = item;
  const { removeItem, editItem } = useContext(listContext);
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
};

export default Itemlist;
