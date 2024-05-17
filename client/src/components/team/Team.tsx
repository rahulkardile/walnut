import { BackgroundGradient } from "../../AceternityUI/ui/BackgroundGradient";

interface TeamProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const Team = ({ imageSrc, alt, title, description }: TeamProps) => {
  return (
    <div className="dark">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white ">
        <img
          src={imageSrc}
          alt={alt}
          height="400"
          width="400"
          className="object-cover w-full h-[15rem] hover:scale-105 transition-transform duration-300 ease-in-out rounded-[22px]"
        />
        <p className="text-base sm:text-xl text-[#4f81ff] mt-4 mb-2">{title}</p>
        <p className="text-sm text-neutral-600 ">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default Team;
