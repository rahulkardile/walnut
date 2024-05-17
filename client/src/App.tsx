import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-[#eff0f1]">
      {/* <Navbar / > */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={""} />
      </Routes>
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> b813e565822f3b9d3ef4b5eabf1fa2cb81e95fe6
    </div>
  );
};

export default App;
