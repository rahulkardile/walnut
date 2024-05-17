// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";



import img1 from "../../assets/swsImg1.jpg";
import img2 from "../../assets/swsImg2.jpg";
import img3 from "../../assets/swsImg3.jpg";
import img4 from "../../assets/swsImg4.jpg";
import img5 from "../../assets/swsImg5.jpg";
import img6 from "../../assets/swsImg6.jpg";


interface Segment {
  name: string;
  desription: string;
  img: string;
}





const SegmentsWeServe = () => {
  const segments: Segment[] = [
    {
      name: "Finance & Financial Advisory",
      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      img: img1
    },
    {
      name: "Government",
      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ",
      img: img2 
    },
    {
      name: "Hospital & Health Care Services",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ",
      img: img3
    },
    {
      name: "Pharmaceuticals",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ",
      img: img4
    },
    {
      name: " Hospitality Industry",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ",
      img:img5},
    {
      name: "Education industry",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ",
      img: img6},
    {
      name: "Hygiene ",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Social Development (NGO)",

      desription:
        "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="absolute left-64 top-1/2 w-72 border-[1px] rounded-lg hidden sm:block border-[#4f81ff]"></div>
        <h2 className="my-10 sm:mb-20 text-xl text-center sm:text-5xl  text-black">
          Segments <span className="text-[#4f81ff]">we serve</span>
        </h2>
        <div className="absolute right-64 top-1/2 w-72 border-[1px] rounded-lg hidden sm:block border-black"></div>
      </div>
      <div className="mx-16">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {segments.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{ backgroundImage: `url('${data.img}')` }}
                    title="Woman holding a mug"
                  ></div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {data.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        {data.desription}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SegmentsWeServe;
