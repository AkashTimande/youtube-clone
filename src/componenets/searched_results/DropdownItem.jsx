import "./DropdownItem.css";

const DropdownItem = ({ item }) => {
  return (
    <div className="dropdown-item-container-search">
      <div className="dropdown-item-icon-search">{item.icon}</div>
      <div className="dropdown-item-name-search">{item.name}</div>
    </div>
  );
};

export default DropdownItem;
