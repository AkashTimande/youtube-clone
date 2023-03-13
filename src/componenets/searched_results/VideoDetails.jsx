import { useContext } from "react";
import { GoKebabVertical } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import VideoContext from "./../../context/VideoContext";
import Dropdown from "./Dropdown";
import "./VideoDetails.css";

const VideoDetails = ({ data }) => {
  const ctx = useContext(VideoContext);
  const navigate = useNavigate();
  console.log("data:", data);
  let viewedByInWords = "";
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
  data.type === "video" && viewedBy(data.video.stats.views);

  const handleKebab = () => {
    if (ctx.dropdownId === data.video.videoId) ctx.setDropdownId("");
    else ctx.setDropdownId(data.video.videoId);
  };

  const handleVideoPlay = () => {
    navigate(`/watch/${data.video.videoId}`);
  };

  return (
    <>
      {data.type === "video" && (
        <div className="video-container" onClick={handleVideoPlay}>
          <div className="video-img">
            <img
              src={data.video.thumbnails[0].url}
              alt="img"
              className="search-img"
            />
            <div className="time-container">
              {`${parseInt(data.video.lengthSeconds / 60, 10)} : ${parseInt(
                data.video.lengthSeconds % 60,
                10
              )}`}
            </div>
          </div>
          <div className="video-details">
            <div className="video-details-title">{data.video.title}</div>
            <div className="video-details-views">
              {viewedByInWords} . {data.video.publishedTimeText}
            </div>
            <div className="video-details-channel">
              <img
                src={data.video.author.avatar[0].url}
                alt="img"
                className="channel-logo"
              />
              <span className="channel-title">{data.video.author.title}</span>
            </div>
            <div className="video-details-decs">
              {data.video.descriptionSnippet}
            </div>
            {data.video.isLiveNow && <div className="live-status">Live</div>}
          </div>
          <div className="menu-svg" onClick={handleKebab}>
            <GoKebabVertical />
          </div>

          {ctx.dropdownId === data.video.videoId && <Dropdown />}
        </div>
      )}
      {data.type === "playlist" && (
        <div className="playlist-container">
          <div className="video-img">
            {/* <img src={data.thumbnails[0].url} alt="img" /> */}
          </div>
          <div className="video-details"></div>
        </div>
      )}
      {data.type === "channel" && (
        <div className="channel-container">
          <div className="video-img">
            {/* <img src={data.thumbnails[0].url} alt="img" /> */}
          </div>
          <div className="video-details"></div>
        </div>
      )}
    </>
  );
};

export default VideoDetails;
