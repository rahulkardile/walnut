import logo from "../../assets/Walnut_logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col px-8 gap-3 justify-between flex-wrap lg:flex-row w-screen mt-1 my-4 mb-4 bg-white pt-8 h-auto">
       
        <section className="flex flex-col items-center gap-4 text-center m-auto w-[85%] lg:w-[20%] p-5">
          <img src={logo} alt="logo" className="w-36" />
          <h2 className="text-lg font-semibold w-[350px] ">Walnut Counsultancy Services</h2>
          <p className="w-[350px]">
            Empower your leadership and team to make informed strategic
            decisions with our actionable insights into the demand landscape.
          </p>
        </section>

        <section className="m-auto w-[85%] lg:w-[15%] p-3">
          <div className="flex gap-1 mb-2 flex-col">
            <h2 className="font-semibold text-2xl text-gray-700">
              Quick Links
            </h2>
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

        <section className="m-auto w-[85%] lg:w-[22%] p-3">
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
            <div className="flex text-lg gap-3 px-3 items-center">
              <IoIosArrowForward className="text-blue-600 h-auto w-[30px] " />
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

        <section className="m-auto w-[85%] lg:w-[30%] p-3">
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

      </footer>

      <span className="m-auto bg-white p-5 flex items-center justify-center mb-28">© 2024 Walnut. All Rights Reserved.</span>
    </>
  );
};

export default Footer;
