import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsCartX, BsSearch } from "react-icons/bs";
import VideoContext from "./../../context/VideoContext";
import "./AutoCompleteMenu.css";

const AutoCompleteMenu = ({ autoCompleteList }) => {
  const ctx = useContext(VideoContext);
  const navigate = useNavigate();
  const searchClickedHandler = (string) => {
    ctx.setShowDropdown(false);
    ctx.setSearchInput(string);
    navigate(`/${string.replaceAll(" ", "+")}`);
  };
  return (
    <div className="autocomplete-menu-container">
      {autoCompleteList &&
        autoCompleteList.length > 0 &&
        autoCompleteList.map((val) => {
          return (
            <div
              className="autocomplete-item-container"
              onClick={() => searchClickedHandler(val)}
            >
              <div className="search-logo">
                <BsSearch />
              </div>
              <div className="autocomplete-title">{val}</div>
            </div>
          );
        })}
    </div>
  );
};

export default AutoCompleteMenu;
