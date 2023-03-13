import { CgChevronLeft } from "react-icons/cg";
import { BiChevronRight } from "react-icons/bi";
import { popular_data } from "./../../dummy_data/data";
import "./TagsContainer.css";

const TagsContainer = () => {
  const handleLeftScroll = () => {
    const left = document.querySelector(".tags-section");
    left.scrollBy(-200, 0);
  };

  const handleRightScroll = () => {
    const right = document.querySelector(".tags-section");
    right.scrollBy(200, 0);
  };

  return (
    <div className="tags-container">
      <div className="left-chevron" onClick={handleLeftScroll}>
        <CgChevronLeft />
      </div>
      <div className="tags-section">
        {popular_data.map((tag) => {
          return <div className="tags-content">{tag.name}</div>;
        })}
      </div>
      <div className="right-chevron" onClick={handleRightScroll}>
        <BiChevronRight />
      </div>
    </div>
  );
};

export default TagsContainer;
