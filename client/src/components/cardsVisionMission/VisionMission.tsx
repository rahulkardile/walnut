import { HoverEffect } from "../../AceternityUI/ui/HoverEffect";
import { FaEye, FaHandHoldingMedical } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const VisionMission = () => {
  const projects = [
    {
      title: "Purpose",
      description:
        "Our purpose is to ignite positive transformation through strategic insights and innovative solutions that propel growth and innovation.",
      link: "#",
      icon: <FaHandHoldingMedical />,
    },
    {
      title: "Vision",
      description:
        "Revolutionize the Business landscape, creating world-class organizations valued by customers and employees alike.",
      link: "#",
      icon: <FaEye />,
    },
    {
      title: "Mission",
      description:
        "To guide businesses and professionals toward unparalleled growth, steadfast integrity and unwavering dedication.",
      link: "#",
      icon: <TbTargetArrow />,
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto px-8 text-center ">
      <HoverEffect items={projects} />
    </div>
  );
};

export default VisionMission;
