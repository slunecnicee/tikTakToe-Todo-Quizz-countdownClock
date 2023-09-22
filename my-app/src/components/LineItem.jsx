import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ id, item, handleChecked, handleDelete, checked }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChecked(id)}
      />
      <label onDoubleClick={() => handleChecked(id)}>{item}</label>
      <FaTrashAlt
        onClick={() => handleDelete(id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item}`}
      />
    </li>
  );
};

export default LineItem;
