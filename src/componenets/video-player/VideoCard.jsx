import { useNavigate } from "react-router-dom";
import "./VideoCard.css";
import { viewedBy } from "./../../dummy_data/data";

const VideoCard = ({ data }) => {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate(`/watch/${data.video.videoId}`);
  };
  const time = `${parseInt(data.video.lengthSeconds / 60, 10)}: ${
    parseInt(data.video.lengthSeconds / 60, 10) < 10
      ? parseInt(data.video.lengthSeconds / 60, 10) * 10
      : parseInt(data.video.lengthSeconds / 60, 10)
  }`;
  return (
    <div className="related-video-container" onClick={cardHandler}>
      <div className="related-video-img">
        <img
          src={data.video.thumbnails[0].url}
          alt="img"
          className="search-img"
        />
        <div className="related-time-container">{time}</div>
      </div>
      <div className="related-video-details">
        <div className="related-video-title">{data.video.title}</div>
        <div className="related-video-channel-title">
          {data.video.author.title}
        </div>
        <div className="related-video-details-views">
          {viewedBy(data.video.stats.views)} . {data.video.publishedTimeText}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
