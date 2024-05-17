import AboutUs from "../../components/aboutUs/AboutUs";
import Blog from "../../components/blog/Blog";
import VisionMission from "../../components/cardsVisionMission/VisionMission";
import Header from "../../components/header/Header";
import OurServices from "../../components/services/OurServices";
import OurTeam from "../../components/team/OurTeam";

const HomePage = () => {
  return (
    <div>
      <Header />
      <VisionMission />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <Blog />
    </div>
  );
};

export default HomePage;
