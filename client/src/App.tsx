import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="bg-[#8faefa]">


<Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={""} />
      </Routes>

      <HomePage />
    </div>
  );
};

export default App;
