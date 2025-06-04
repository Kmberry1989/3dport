import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  // Only show the first 8 technologies
  const visibleTechnologies = technologies.slice(0, 8);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology, idx) => (
          <div
            className="h-36 w-36 p-[3px] rounded-[24px] bg-gradient-to-br from-teal-400 via-teal-600 to-teal-200 shadow-lg rolling-ball"
            key={technology.name}
            style={{ animationDelay: `${Math.random() * 1.5}s` }}
          >
            <div className="bg-[#151030] rounded-[20px] flex items-center justify-center h-full w-full">
              <BallCanvas icon={technology.icon} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
