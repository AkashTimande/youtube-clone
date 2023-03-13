import HomeContainer from "./HomeContainer";
import NavigationBar from "./Navigation";
import Sidebar from "./SideBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-nav-container">
        <NavigationBar />
      </div>
      <div className="home-container">
        <Sidebar />
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
