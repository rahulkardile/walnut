import AboutUs from "../../components/aboutUs/AboutUs";
// import Blog from "../../components/blog/Blog";
import VisionMission from "../../components/cardsVisionMission/VisionMission";
import Header from "../../components/header/Header";
import SegmentsWeServe from "../../components/segments/SegmentsWeServe";
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
      <SegmentsWeServe />

    </div>
  );
};

export default HomePage;
