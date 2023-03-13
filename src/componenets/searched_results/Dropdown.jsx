import {
  dropdown_items_shortcuts_for_search,
  dropdown_items_tools_for_search
} from "./../../dummy_data/data";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ ref }) => {
  console.log(ref);
  return (
    <div className="dropdown-container-search">
      <div className="dropdown-shortcuts-search">
        {dropdown_items_shortcuts_for_search.map((item) => {
          return <DropdownItem item={item} />;
        })}
      </div>
      <div className="dropdown-tools-search">
        {dropdown_items_tools_for_search.map((item) => {
          return <DropdownItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
