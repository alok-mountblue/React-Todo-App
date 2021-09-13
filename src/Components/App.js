import React, { useState } from "react";
import List from "./List";

export const listContext = React.createContext();

function App() {
  const [name, setName] = useState("");
  const [items, setItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const addItem = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please enter input");
    } else if (name && isEditing) {
      setItem(
        items.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };

      setItem([...items, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    setItem([]);
  };

  const removeItem = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const curItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(curItem.title);
  };

  return (
    <>
      <listContext.Provider value={{ items, removeItem, editItem }}>
        <div>
          <div>
            <figure>
              <h1>Todo App</h1>
            </figure>
            <div>
              <input
                type="text"
                placeholder=" Add item"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="ui button blue" onClick={addItem}>
                ADD
              </button>
            </div>
            <div>
              <List items={items} removeItem={removeItem} editItem={editItem} />
              <button className="clear-btn" onClick={clearList}>
                clear items
              </button>
            </div>
          </div>
        </div>
      </listContext.Provider>
    </>
  );
}

export default App;
