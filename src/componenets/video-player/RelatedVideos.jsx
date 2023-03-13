import "./RelatedVideos.css";
import VideoCard from "./VideoCard";

const RelatedVideos = ({ relatedVideos }) => {
  console.log("reletee: ", relatedVideos);
  return (
    <div className="related-videos-container">
      {relatedVideos.map(
        (video) => video.type === "video" && <VideoCard data={video} />
      )}
    </div>
  );
};

export default RelatedVideos;
