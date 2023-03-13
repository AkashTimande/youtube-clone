import TagsContainer from "./TagsContainer";
import VideoContext from "./../../context/VideoContext";
import VideoCard from "./VideoCard";
import "./HomeContainer.css";
import { useContext } from "react";

const HomeContainer = () => {
  const ctx = useContext(VideoContext);

  const handleKebob = () => {
    if (ctx.dropdownId !== "") ctx.setDropdownId("");
  };

  return (
    <div className="main-container" onClick={handleKebob}>
      <TagsContainer />
      <section className="vidoes-container">
        {ctx.data.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>
    </div>
  );
};

export default HomeContainer;
