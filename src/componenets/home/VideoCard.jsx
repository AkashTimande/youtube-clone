import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoKebabVertical } from "react-icons/go";
import VideoContext from "./../../context/VideoContext";
import Dropdown from "./Dropdown";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  let viewedByInWords = "";
  const ctx = useContext(VideoContext);
  const ref = useRef();
  const navigate = useNavigate();

  const viewedBy = (num) => {
    const str = num.toString();
    const length = str.length;
    switch (length) {
      case 1:
        viewedByInWords = str;
        break;
      case 2:
        viewedByInWords = str;
        break;
      case 3:
        viewedByInWords = str;
        break;
      case 4:
        viewedByInWords = `${str[0]}.${str[1]}k`;
        break;

      case 5:
        viewedByInWords = `${str[0]}${str[1]}k`;
        break;

      case 6:
        viewedByInWords = `${str[0]}.${str[1]}Lakh`;
        break;

      case 7:
        viewedByInWords = `${str[0]}${str[1]}Lakh`;
        break;

      case 8:
        viewedByInWords = `${str[0]}.${str[1]}Crore`;
        break;

      case 9:
        viewedByInWords = `${str[0]}${str[1]}Crore`;
        break;

      default:
        viewedByInWords = `${str.substring(0, str.length - 6)}Crore`;
    }
  };

  viewedBy(video.views);

  const handleKebab = () => {
    if (ctx.dropdownId === video.id) ctx.setDropdownId("");
    else ctx.setDropdownId(video.id);
  };

  const handleVideoPlay = () => {
    navigate(`/watch/${video.id}`);
  };
  return (
    <div className="card-container" onClick={handleVideoPlay}>
      <div className="card-thumbnail">
        <img
          src={video.thumbnail.url}
          alt="thumbnail"
          className="card-thumbnail-img"
        />
        <span className="video-duration">{video.duration_formatted}</span>
      </div>
      <div className="first-row">
        <div className="channel-logo">
          <img
            src={video.channel.icon}
            alt="channel-logo"
            className="channel-logo-img"
          />
        </div>
        <div className="video-info">
          <div className="card-title">{video.title}</div>
          <div className="card-channel-title subrow">{video.channel.name}</div>
          <div className="card-data subrow">
            <span>{viewedByInWords}</span> . <span>{video.uploadedAt}</span>
          </div>
        </div>
        <div className="menu-options" onClick={handleKebab}>
          <GoKebabVertical />
        </div>
        {ctx.dropdownId === video.id && <Dropdown ref={ref} />}
      </div>
    </div>
  );
};

export default VideoCard;
