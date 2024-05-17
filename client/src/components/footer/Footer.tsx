import React from "react";
import logo from "../../assets/Walnut_logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-row px-14 gap-12 justify-between w-full mt-1 mb-28 bg-white pt-8  h-auto">
      <section className="flex flex-col items-center gap-4 text-center w-[25%] p-5">
        <img src={logo} alt="logo" className="w-36" />
        <p className="w-300px">
          Empower your leadership and team to make informed strategic decisions with our actionable insights into the demand landscape.
        </p>
      </section>

      <section className="w-[25%] p-6">
        <div className="flex gap-1 mb-2 flex-col">
          <h2 className="font-semibold text-2xl text-gray-700">Quick Links</h2>
          <p className="w-20 ml-2 rounded-lg bg-blue-500 h-1 " />
        </div>
        <main className="flex flex-col gap-3">
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Home
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Work
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Why Us
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Contact Us
            </Link>
          </div>
        </main>
      </section>

      <section className="w-[25%] p-6">
        <div className="flex gap-1 mb-2 flex-col">
          <h2 className="font-semibold text-2xl text-gray-700">Services</h2>
          <p className="w-20 ml-2 rounded-lg bg-blue-500 h-1 " />
        </div>
        <main className="flex flex-col gap-3">
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Strategy Development
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 w-[35px] h-auto  " />
            <Link to={"/Contact"} className="font-semibold text-start">
              Strategy audit-Business analysis and planning
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Industry and sectore study
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              Research & Insights
            </Link>
          </div>
        </main>
      </section>

      <section className="w-[35%] p-6">
        <div className="flex gap-1 mb-2 items-start flex-col">
          <h2 className="font-semibold text-2xl text-gray-700">Contact Us</h2>
          <p className="w-20 ml-1 rounded-lg bg-blue-500 h-1" />
        </div>
        <main className="flex flex-col gap-3">
          <div className="flex text-lg gap-2 px-3 items-start">
            <IoIosArrowForward className="text-blue-600 w-[80px] mt-2 h-auto" />
            <Link to={"/Contact"} className="font-semibold">
              91 Springboard, 13,80 Feet Rd, near Sir.C.V. Raman General
              Hospital, Kalyan Nagar, Indira Nagar 1st Stage, H Colony,
              Indiranagar, Bengaluru, Karnataka 560038.
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              +91 97690 05108
            </Link>
          </div>
          <div className="flex text-lg gap-2 px-3 items-center">
            <IoIosArrowForward className="text-blue-600 " />
            <Link to={"/Contact"} className="font-semibold">
              contact@denovo.co.in
            </Link>
          </div>
        </main>
      </section>

      <span>© 2024 Denovo. All Rights Reserved.</span>

    </footer>
  );
};

export default Footer;
