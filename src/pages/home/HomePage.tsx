import AboutUs from "../../components/aboutUs/AboutUs";
import VisionMission from "../../components/cardsVisionMission/VisionMission";
import Header from "../../components/header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <VisionMission />
      <AboutUs />
    </div>
  );
};

export default HomePage;
