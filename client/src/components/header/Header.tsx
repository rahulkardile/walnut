import { motion } from "framer-motion";
import { ImagesSlider } from "../../AceternityUI/ui/ImagesSlider";

import imgs1 from "../../assets/imgs .jpg";
import imgs2 from "../../assets/imgs2.jpg";
import imgs3 from "../../assets/imgs3.jpg";
import imgs4 from "../../assets/imgs4.jpg";
const Header = () => {
  const images = [imgs1, imgs2, imgs3, imgs4];
  return (
    <ImagesSlider className="h-[48rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Customized Business Solutions for <br /> diverse industries
        </motion.p>
        <span className="text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Explore strategies tailored to your industry's unique challenges.
        </span>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join us now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Header;
