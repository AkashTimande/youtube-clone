import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMicrophone } from "react-icons/bi";
import AutoCompleteMenu from "./AutoCompleteMenu";
import VideoContext from "./../../context/VideoContext";
import YoutubeLogo from "./../../dummy_data/images/YouTube-Logo.png";
import UserImg from "./../../dummy_data/images/Image.jpg";
import { api_options } from "./../../dummy_data/data";
import "./Navigation.css";
import { useContext, useState } from "react";

const Navigation = () => {
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  const ctx = useContext(VideoContext);
  const navigate = useNavigate();
  const params = useParams();

  const handleSeacrhInput = (e) => {
    const input = e.target.value;
    ctx.setSearchInput(input);

    if (input === "") {
      setAutoCompleteList([]);
      ctx.setShowDropdown(false);
    } else {
      ctx.setShowDropdown(true);
      fetch(
        `https://youtube138.p.rapidapi.com/auto-complete/?q=${input}&hl=en&gl=US`,
        api_options
      )
        .then((response) => response.json())
        .then((response) => {
          setAutoCompleteList(response.results);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleSearchInput = () => {
    const inputTxt = ctx.seacrhInput.replaceAll(" ", "+");
    navigate(`/${inputTxt}`);
  };

  const logoClickHandler = () => {
    navigate("/");
    ctx.setSearchInput("");
  };

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <div className="logo-container-menu">
          <HiOutlineMenu />
        </div>
        <div className="logo-container-img" onClick={logoClickHandler}>
          <img src={YoutubeLogo} alt="logo" width="100px" />
        </div>
        <div className="super-script">IN</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={handleSeacrhInput}
          value={
            ctx.seacrhInput ||
            (params?.searchQuery && params?.searchQuery.replaceAll("+", " "))
          }
        />
        <button className="search-button" onClick={handleSearchInput}>
          <BsSearch />
        </button>
      </div>
      <div className="tools-container">
        <div className="tools-img">
          <RiVideoAddLine />
        </div>
        <div className="tools-img">
          <IoMdNotificationsOutline />
          <div className="badge">6</div>
        </div>
        <div className="tool-img">
          <img src={UserImg} alt="user-img" width="40px" height="40px" />
        </div>
      </div>
      {ctx.showDropdown && (
        <AutoCompleteMenu autoCompleteList={autoCompleteList} />
      )}
    </div>
  );
};

export default Navigation;
