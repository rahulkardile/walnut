import { Link } from "react-router-dom";
import logo from "../../assets/Walnut_logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex flex-row justify-between p-1 bg-white px-9 items-center">
      <img src={logo} alt="logo" className="w-28 h-28" />

      <nav className="portrait:hidden sm:hidden lg:block ">
        <div className="flex flex-row text-lg items-center gap-4 pr-8">
          <Link
            className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            About Us
          </Link>
          <Link
            className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            Services
          </Link>
          <Link
            className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            Segments We Serve
          </Link>
          <Link
            className="duration-500 ease-in-out tracking-wide text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            Continuous Learning{" "}
          </Link>
          <Link
            className="duration-500 ease-in-out text-black font-semibold hover:text-yellow-500"
            to={"/"}
          >
            Let's Connect
          </Link>
        </div>
      </nav>

      <button
        style={{ backgroundColor: "#182137" }}
        className="p-2 hidden lg:block tracking-wide rounded-full px-6 text-white font-semibold hover:scale-105 duration-500"
      >
        Join Us
      </button>

      <div className="lg:hidden block">
        {toggle ? (
          <MdOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-3xl"
          />
        ) : (
          <IoCloseSharp
            className="text-3xl"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <nav
          className={`bg-white absolute h-[110vh]  z-20 left-0 top-0 w-[70%] sm:[30%] ${
            toggle ? "translate-x-[-110%]" : "translate-x-0"
          } duration-1000 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-10">
            <Link
              className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              About Us
            </Link>
            <Link
              className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              Services
            </Link>
            <Link
              className="duration-500 tracking-wide ease-in-out text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              Segments we Serve
            </Link>
            <Link
              className="duration-500 ease-in-out tracking-wide text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              Continuous Learning{" "}
            </Link>
            <Link
              className="duration-500 ease-in-out text-black font-semibold hover:text-yellow-500"
              to={"/"}
            >
              Lets Connect
            </Link>
            
            <button
              style={{ backgroundColor: "#182137" }}
              className="p-2 tracking-wide rounded-full px-6 w-[150px] text-white font-semibold hover:scale-105 duration-500"
            >
              Join Us
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
