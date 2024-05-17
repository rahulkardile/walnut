
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <header className="flex flex-row justify-between p-3 items-center">
      <img src={logo} alt="logo" className="w-12 h-12" />

      <nav className="portrait:hidden sm:hidden lg:block ">
        <div className="flex flex-row items-center gap-4 pr-8">
          <Link to={"/"}>descktop</Link>
          <Link to={"/"}>Home1</Link>
          <Link to={"/"}>Home1</Link>
          <Link to={"/"}>Home1</Link>
        </div>
      </nav>

      <div className="lg:hidden block">
        <MdOutlineMenu onClick={() => setToggle(!toggle)} className="text-lg" />

        <nav
          className={`bg-white absolute h-[110vh]  z-20 left-0 top-0 w-[50%] sm:[30%] ${
            toggle ? "translate-x-[-110%]" : "translate-x-0"
          } duration-1000 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-10">
            <Link to={"/"}>mobile</Link>
            <Link to={"/"}>Home1</Link>
            <Link to={"/"}>Home1</Link>
            <Link to={"/"}>Home1</Link>
            <p onClick={() => setToggle(!toggle)}>Close</p>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
