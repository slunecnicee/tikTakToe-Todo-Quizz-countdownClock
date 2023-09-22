import ListItems from "./ListItem";

const Content = ({ handleChecked, handleDelete, items }) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          items={items}
        />
      ) : (
        <h2 style={{ color: "#F0EC8B" }}>List is empty</h2>
      )}
    </main>
  );
};

export default Content;
