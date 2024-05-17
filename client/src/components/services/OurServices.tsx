interface Service {
  title: string;
  description: string;
}

const OurServices = () => {
  const services: Service[] = [
    {
      title: "Business strategy Consultation",
      description:
        "At WBC, we provide expertise to Small Businesses to address critical Business Management challenges. These include areas like Strategic Direction for Sales & Marketing, Business Planning for growth...... ",
    },
    {
      title: "Coaching & Mentoring for Startups & SMEs",
      description:
        "In the ever changing dynamic business environment, WBC offers personalized Business Coaching & Mentoring to Start-up Founders, SME, and Indivuals......",
    },
    {
      title: "Marketing  & Sales  Consultation ",
      description:
        "The GTM strategy specifies marketing tactics and channels for each segment. Digital channels such as paid search, social media, email/ what’s App, and websites are effective for generating awareness........",
    },
    {
      title: "B2B & B2G Sales Strategy",
      description: `B2G sales strategy focuses on cultivating relationships and providing tailored solutions to government agencies, ensuring compliance and meeting public sector needs efficiently.....`,
    },
    {
      title: "Financial Management consultancy ",
      description:
        "We have one-stop solution for all your financial needs, offering asset management and financial advice with a PAN India presence. Trust us to handle your money matters while you focus on what matters most. ",
    },
    {
      title: "Retainership  Commitment  ",
      description:
        "We provide retainer services tailored for small and medium-sized industries, offering expert assistance for specified hours per month at the client's location to implement ongoing processes and work..... ",
    },
  ];

  return (
    <>
  <div className="relative">
        <div className="absolute left-64 top-1/2 w-80 border-[1px] rounded-lg hidden sm:block border-[#4f81ff]"></div>
        <h2 className="my-10 sm:mb-20 text-xl text-center sm:text-5xl  text-black">
          Our <span className="text-[#4f81ff]">Services</span>
        </h2>
        <div className="absolute right-64 top-1/2 w-80 border-[1px] rounded-lg hidden sm:block border-black"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* <div className="h-[40rem] w-full flex items-center justify-center "> */}

        {services.map((services, index) => {
          return (
            <div
              key={index}
              className="group relative cursor-pointer flex flex-col items-center overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full  bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md flex flex-col items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-center text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <span className="text-[#4f81ff]">{services.title}</span>
                  <p className="text-base">{services.description}</p>
                </div>
                <div className="pt-5 text-base  font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 group-hover:text-white"
                    >
                      Read the docs &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* </div> */}
      </div>
    </>
  );
};

export default OurServices;
