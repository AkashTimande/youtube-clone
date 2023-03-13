import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import RelatedVideos from "./RelatedVideos";
import "./VideoContainer.css";
import Navigation from "./../home/Navigation";
import { useParams } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

const VideoContainer = () => {
  const params = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ee78468c6bmshaf0a0c813b32c06p103305jsn2049f090173d",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
      }
    };

    fetch(
      `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.id}&hl=en&gl=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRelatedVideos(response.contents))
      .catch((err) => console.error(err));
  }, [params.id]);
  return (
    <div className="video-playback-container">
      <Navigation />
      <div className="video-playback-main">
        <VideoPlayer video={BsCartX.currVideo} />
        <RelatedVideos relatedVideos={relatedVideos} />
      </div>
    </div>
  );
};

export default VideoContainer;
