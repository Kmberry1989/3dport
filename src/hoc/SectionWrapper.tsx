import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    const ref = useRef<HTMLDivElement>(null);
    // Fade out as the section scrolls under the header (assume header is 80px)
    const { scrollY } = useScroll({ target: ref });
    const opacity = useTransform(scrollY, [0, 80], [1, 0.2]);
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl fade-under-header`}
        id={idName}
        ref={ref}
        style={{ opacity }}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
