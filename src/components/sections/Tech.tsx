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
            className="h-36 w-36 rounded-[24px] bg-[#151030] flex items-center justify-center"
            key={technology.name}
            style={{ animationDelay: `${Math.random() * 1.5}s` }}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
