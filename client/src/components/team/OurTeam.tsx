import { TextGenerateEffect } from "../../AceternityUI/ui/TextGenerateEffect";
import { People } from "./People";
import Team from "./Team";

const OurTeam = () => {
  interface Team {
    id: number;
    name: string;
    image: string;
    review: string;
  }

  const team: Team[] = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      review:
        "John's expertise in software development has greatly contributed to our projects. He consistently delivers high-quality code and is a valuable team player.",
    },
    {
      id: 2,
      name: "Robert Johnson",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      review:
        "Robert's strategic insights and leadership skills as a product strategist have been instrumental in guiding our product roadmap. He excels in analyzing market trends and customer needs.",
    },
    {
      id: 3,
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      review:
        "Jane's proficiency in data analysis has significantly enhanced our decision-making process. Her attention to detail and ability to extract meaningful insights from complex datasets are commendable.",
    },
    {
      id: 4,
      name: "Emily Davis",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      review:
        "Emily's creativity and attention to user experience have elevated our product designs to new heights. She consistently delivers visually stunning and intuitive interfaces that resonate with our users.",
    },
    // {
    //   id: 5,
    //   name: "Tyler Durden",
    //   image:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    //   review:
    //     "Tyler's meticulous approach to quality assurance ensures that our products meet the highest standards. His thorough testing procedures have significantly improved product reliability and user satisfaction.",
    // },
   
  ];

  const teamPara =
    "Expanding your business Pan India, presents immense challenges. WBC , we excel in transforming these challenges into success stories. Our profound grasp of the Indian market, coupled with our extensive range of services, positions us as the perfect partner for your business journey.";
  const teamPara1 =
    "Our team of specialists will optimize your resources and propel you toward your business objectives. Let's collaborate to a grow business.";
return (
    <div>
          <div className="relative">
        <div className="absolute left-64 top-1/2 w-96 border-[3px] rounded-lg hidden sm:block border-[#ffae00]"></div>
        <h2 className="my-10 sm:mb-20 text-xl text-center sm:text-5xl  text-black">
          Our <span className="text-[#ffae00]">Team</span>
        </h2>
        <div className="absolute right-64 top-1/2 w-96 border-[3px] rounded-lg hidden sm:block border-black"></div>
      </div>

        <People />
        <div className="px-16 text-center">
            <TextGenerateEffect words={teamPara} />
            <TextGenerateEffect words={teamPara1} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
            {team.map((team) => (
                <Team
                    key={team.id}
                    imageSrc={team.image}
                    alt={team.name}
                    title={team.name}
                    description={team.review}
                />
            ))}
        </div>
    </div>
);
};

export default OurTeam;
