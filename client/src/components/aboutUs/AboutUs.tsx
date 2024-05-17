import { TextGenerateEffect } from "../../AceternityUI/ui/TextGenerateEffect";
import ImagesEffect from "../imagesEffect/ImagesEffect";

const AboutUs = () => {
  const About1 = `Welcome to Walnut Business Consultants, Experience the fusion of passion and expertise. Our services are tailored for the ambitious, addressing the distinct needs of Small and Medium Business owners, Early-stage Startups, and seasoned Business Executives.`;
  const About2 = `Our Consulting Solutions transcend the ordinary. Through close collaboration, we reshape your venture into a purpose-driven organization championing excellence, sustainable growth, and adaptability in today's dynamic market.`;
  const About3 = `Our Coaching & Mentoring Programs are tailored for modern age leaders. Recognizing the multifaceted roles you undertake, our program empowers forward-thinking Business Owners, Founders, or Corporate Executives with insights and skills to lead with clarity, manage with precision, and excel with distinction.`;
  const About4 = `We're a team of dedicated professionals committed to driving Strategic Performance Improvement within your organization. Our creative management consulting firm specializes in enhancing Strategic Focus, People Performance, and Motivation to achieve superior business outcomes. Experience the difference with Walnut Business Consultants, where our collaborative approach ensures a rewarding experience for both our clients and our team."`;
  const About5 = `Whether you're venturing into new markets, revitalizing your brand, or innovating new products and services, our market intelligence provides the foresight necessary to drive sustainable growth and success. `;
  const About6 = `"Empower your leadership and team to make informed strategic decisions with our actionable insights into the demand landscape.” `;

  return (
    <>
      <div className="relative">
        <div className="absolute left-64 top-1/2 w-96 border-[1px] rounded-lg hidden sm:block border-[#4f81ff]"></div>
        <h2 className="my-10 sm:mb-20 text-xl text-center sm:text-5xl  text-black">
          About <span className="text-[#4f81ff]">US</span>
        </h2>
        <div className="absolute right-64 top-1/2 w-96 border-[1px] rounded-lg hidden sm:block border-black"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly pb-10">
        <div className="mt-7">
          <ImagesEffect />
        </div>

        <div className="w-full md:w-1/2 px-3 text-center sm:text-left sm:px-0">
          <TextGenerateEffect words={About1} />
          <TextGenerateEffect words={About2} />
          <TextGenerateEffect words={About3} />
          <TextGenerateEffect words={About4} />
          <TextGenerateEffect words={About5} />
          <TextGenerateEffect words={About6} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
