import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoContext from "./../../context/VideoContext";
import VideoDetails from "./VideoDetails";
import { api_options } from "./../../dummy_data/data";
import "./ResultsContainer.css";

const ResultsContainer = () => {
  const params = useParams();
  const [resultVideos, setResultVideos] = useState([]);
  const ctx = useContext(VideoContext);
  useEffect(() => {
    const inpQuery = params.searchQuery;

    fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${inpQuery}&hl=en&gl=US`,
      api_options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("res: ", response);
        setResultVideos(response.contents);
      })
      .catch((err) => console.error(err));
  }, [params.searchQuery]);

  const handleKebob = () => {
    if (ctx.dropdownId !== "") ctx.setDropdownId("");
  };
  console.log("input: ", ctx.searchInput);
  return (
    <div className="main-container" onClick={handleKebob}>
      <section className="result-video-container">
        {resultVideos &&
          resultVideos.length > 0 &&
          resultVideos.map((data) => {
            return <VideoDetails data={data} />;
          })}
      </section>
    </div>
  );
};
export default ResultsContainer;
