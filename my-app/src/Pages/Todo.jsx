import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import AddItem from "../components/AddItem";
import Search from "../components/Search";

function Todo() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-do-list")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("to-do-list", JSON.stringify(items));
  }, [items]);

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="main-wrp">
      <div className="todo-wrp">
        <Header />
        <AddItem
          handleSubmit={handleSubmit}
          setNewItem={setNewItem}
          newItem={newItem}
        />
        <Search search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLocaleLowerCase())
          )}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </div>
  );
}

export default Todo;
