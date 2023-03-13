import {
  dropdown_items_shortcuts,
  dropdown_items_tools
} from "./../../dummy_data/data";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ ref }) => {
  console.log(ref);
  return (
    <div className="dropdown-container">
      <div className="dropdown-shortcuts">
        {dropdown_items_shortcuts.map((item) => {
          return <DropdownItem item={item} />;
        })}
      </div>
      <div className="dropdown-tools">
        {dropdown_items_tools.map((item) => {
          return <DropdownItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
