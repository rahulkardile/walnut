import { HoverEffect } from "../../AceternityUI/ui/HoverEffect";

const VisionMission = () => {
    const projects = [
        {
          title: "Purpose",
          description:
            "Our purpose is to ignite positive transformation through strategic insights and innovative solutions that propel growth and innovation.",
          link: "#",
        },
        {
          title: "Vision",
          description:
            "Revolutionize the Business landscape, creating world-class organizations valued by customers and employees alike.",
          link: "#",
        },
        {
          title: "Mission",
          description:
            "To guide businesses and professionals toward unparalleled growth, steadfast integrity and unwavering dedication.",
          link: "#",
        },
       
      ];

    return (
        <div className="max-w-5xl mx-auto px-8 ">
          <HoverEffect items={projects} />
        </div>
      );
}

export default VisionMission