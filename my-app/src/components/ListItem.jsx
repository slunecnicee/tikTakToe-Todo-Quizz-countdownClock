import LineItem from "./LineItem";

const ListItems = ({ items, handleChecked, handleDelete }) => {
  return (
    <ul>
      {items.map((liItem) => {
        const { id, checked, item } = liItem;
        return (
          <LineItem
            key={id}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
            id={id}
            checked={checked}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
