import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-[#eff0f1]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={""} />
      </Routes>
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> 158594436c5751be26a3d323334c60c809457554
    </div>
  );
};

export default App;
