import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

import stickyC from "../../assets/sticky/sticky-c.png";
import stickyL from "../../assets/sticky/sticky-li.png";
import stickyI from "../../assets/sticky/sticky-li.png";
import stickyC2 from "../../assets/sticky/sticky-c2.png";
import stickyK from "../../assets/sticky/sticky-k.png";
import stickyH from "../../assets/sticky/sticky-h.png";
import stickyE from "../../assets/sticky/sticky-e.png";
import stickyR from "../../assets/sticky/sticky-re.png";

const notes = [
  stickyC,
  stickyL,
  stickyI,
  stickyC2,
  stickyK,
  stickyH,
  stickyE,
  stickyR,
  stickyE,
];

const positions = [
  { left: "30%", top: "35%" },
  { left: "38%", top: "32%" },
  { left: "46%", top: "34%" },
  { left: "54%", top: "35%" },
  { left: "62%", top: "32%" },
  { left: "37%", top: "50%" },
  { left: "45%", top: "52%" },
  { left: "53%", top: "51%" },
  { left: "61%", top: "52%" },
];



const Hero = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = notes.map((_, i) =>
      setTimeout(() => setVisible((v) => Math.max(v, i + 1)), (i + 1) * 300)
    );
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleClick = () => {
    setVisible(0);
    setTimeout(() => navigate('/desktop'), 300);
  };

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      {/* Hero background monitor image (clickable) */}
      <div
        className="absolute inset-0 -z-10 cursor-pointer select-none"
        style={{
          background: `url('/herobg.png') center/cover no-repeat`,
        }}
        onClick={handleClick}
        title="Click to open desktop"
      >
        {notes.slice(0, visible).map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="note"
            className="absolute w-24"
            style={positions[i]}
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 1, rotate: 0 }}
          />
        ))}
      </div>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-stroke text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
