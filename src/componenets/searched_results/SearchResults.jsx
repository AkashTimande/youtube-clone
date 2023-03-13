import NavigationBar from "./../home/Navigation";
import Sidebar from "./../home/SideBar";
import ResultsContainer from "./ResultsContainer";
import "./SearchResults.css";

const SearchResults = () => {
  return (
    <>
      <div className="top-nav-container">
        <NavigationBar />
      </div>
      <div className="home-container">
        <Sidebar />
        <ResultsContainer />
      </div>
    </>
  );
};

export default SearchResults;
