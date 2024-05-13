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
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={imageSrc}
          alt={alt}
          height="400"
          width="400"
          className="object-cover w-full h-[15rem] hover:scale-105 transition-transform duration-300 ease-in-out rounded-[22px]"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default Team;
