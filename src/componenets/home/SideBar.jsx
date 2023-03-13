import { useState } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { category_data, menu_data } from "./../../dummy_data/data";
import ShortsPNG from "./../../dummy_data/images/shorts.png";
import "./SideBar.css";

const Home = () => {
  const [active, setActive] = useState("home");

  const handleActiveChange = (category) => {
    setActive(category);
  };
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-main-category static">
          <div
            className={`category-container ${
              active === "home" ? "active-tab" : ""
            }`}
            onClick={() => handleActiveChange("home")}
          >
            <div className="categoty-icon">
              <BsHouseDoorFill />
            </div>
            <div className="category-title">Home</div>
          </div>
          <div
            className={`category-container ${
              active === "shorts" ? "active-tab" : ""
            }`}
            onClick={() => handleActiveChange("shorts")}
          >
            <div className="categoty-icon">
              <img src={ShortsPNG} alt="icon" height="24px" fill="black" />
            </div>
            <div className="category-title">Shorts</div>
          </div>
          <div
            className={`category-container ${
              active === "subscription" ? "active-tab" : "white"
            }`}
            onClick={() => handleActiveChange("subscription")}
          >
            <div className="categoty-icon">
              <MdSubscriptions />
              {/* <BsHouseDoorFill /> */}
            </div>
            <div className="category-title">Subscriptions</div>
          </div>
        </div>
        <div className="sidebar-main-category dynamic">
          <div className="category-header">Explore</div>
          {category_data.map((category) => {
            return (
              <div
                className={`category-container ${
                  active === category.name.toLowerCase() ? "active-tab" : ""
                }`}
                onClick={() => handleActiveChange(category.name.toLowerCase())}
              >
                <div className="categoty-icon">{category.icon}</div>
                <div className="category-title">{category.name}</div>
              </div>
            );
          })}
        </div>
        <div className="sidebar-main-category dynamic">
          {menu_data.map((category) => {
            return (
              <div
                className={`category-container ${
                  active === category.name.toLowerCase() ? "active-tab" : ""
                }`}
                onClick={() => handleActiveChange(category.name.toLowerCase())}
              >
                <div className="categoty-icon">{category.icon}</div>
                <div className="category-title">{category.name}</div>
              </div>
            );
          })}
        </div>
        <div className="sidebar-footer">
          <div className="row">
            About Press Copyright Contact us Creators Advertise Developers
          </div>
          <div className="row">
            Terms Privacy Policy & Safety How YouTube worksTest new features
          </div>
          <div className="row copyright">© 2023 Sanskari Google LLC</div>
        </div>
      </div>
    </>
  );
};

export default Home;
