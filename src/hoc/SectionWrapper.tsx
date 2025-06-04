import { motion } from "framer-motion";
// import { useScroll, useTransform } from "framer-motion"; // Comment out or remove
// import { useRef } from "react"; // Comment out or remove if not used elsewhere after changes

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    // const ref = useRef<HTMLDivElement>(null); // Comment out or remove
    // Fade out as the section scrolls under the header (assume header is 80px)
    // const { scrollY } = useScroll({ target: ref }); // Comment out or remove
    // const opacity = useTransform(scrollY, [0, 80], [1, 0.2]); // Comment out or remove
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`} // Removed fade-under-header if it's tied to opacity
        id={idName}
        // ref={ref} // Comment out or remove
        style={{ opacity: 1 }} // Set opacity to 1
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;