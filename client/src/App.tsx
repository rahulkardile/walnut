import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-[#eff0f1]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={""} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
