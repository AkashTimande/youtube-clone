import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componenets/home/Home";
import VideoContext from "./context/VideoContext";
import SearchResults from "./componenets/searched_results/SearchResults";
import "./styles.css";
import VideoContainer from "./componenets/video-player/VideoContainer";

export default function App() {
  const [data, setData] = useState([]);
  const [dropdownId, setDropdownId] = useState("");
  const [seacrhInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "17cb908ad7msh45f9bde3ad50bcbp1586ccjsn2f90871d097d",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com"
      }
    };
    fetch(
      "https://simple-youtube-search.p.rapidapi.com/search?query=selena%2Bgomez&safesearch=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  }, []);

  const context_data = {
    data,
    dropdownId,
    setDropdownId,
    seacrhInput,
    setSearchInput,
    showDropdown,
    setShowDropdown
  };

  return (
    <VideoContext.Provider value={context_data}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:searchQuery" element={<SearchResults />} />
          <Route path="/watch/:id" element={<VideoContainer />} />
        </Routes>
      </div>
    </VideoContext.Provider>
  );
}
