import "./DropdownItem.css";

const DropdownItem = ({ item }) => {
  return (
    <div className="dropdown-item-container">
      <div className="dropdown-item-icon">{item.icon}</div>
      <div className="dropdown-item-name">{item.name}</div>
    </div>
  );
};

export default DropdownItem;
