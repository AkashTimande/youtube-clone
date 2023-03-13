import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { useState, useEffect } from "react";
import { api_options } from "./../../dummy_data/data";
import { FaRegBell } from "react-icons/fa";

const VideoPlayer = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState();

  useEffect(() => {
    fetch(
      `https://youtube138.p.rapidapi.com/video/details/?id=${params.id}&hl=en&gl=US`,
      api_options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoDetails(response);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  return (
    <div className="video-player-container">
      <section className="video-player-section">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${params.id}`}
          controls
          width="98%"
          height="81%"
          style={{ backgroundColor: "#000000" }}
          playing={true}
        />
      </section>
      <section className="videoplayer-details-section">
        <div className="videoplayer-details-name">
          {videoDetails && videoDetails.title}
        </div>
        <div className="videoplayer-details-info">
          <div className="videoplayer-details-channel">
            <img
              src={videoDetails && videoDetails.author.avatar[0].url}
              alt="channel-logo"
              className="videoplayer-details-channel-logo"
            />

            <span className="videoplayer-channel-name">
              {videoDetails && videoDetails.author.title}
            </span>
            <button className="subscribed-button">
              <FaRegBell />
              Subscribed
            </button>
          </div>
          <div className="videoplayer-details-tools"></div>
        </div>
      </section>
      <section className="videoplayer-comments-section"></section>
    </div>
  );
};

export default VideoPlayer;
