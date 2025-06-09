import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";



const Hero = () => {
  // Use a click handler to navigate to the desktop login
  const handleHeroClick = () => {
    window.location.href = '/desktop';
  };
  return (
    <section className={`relative mx-auto w-full`}>
      {/* Hero background image, clickable, stretches to bottom of Hero section */}
      <div
        className="w-full cursor-pointer select-none"
        style={{
          minHeight: '320px',
          height: 'calc(100vh - 120px)',
          maxHeight: 600,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          background: "none"
        }}
        onClick={handleHeroClick}
        title="Click to open desktop login"
      >
        <img
          src="/herobg.png"
          alt="hero background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 0,
            boxShadow: '0 4px 32px #0008',
            cursor: 'pointer',
            userSelect: 'none',
            pointerEvents: 'auto',
          }}
        />
      </div>
      {/* Overlay hero text content absolutely over the image */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
        style={{zIndex:2}}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-stroke text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeIn("", "", 0.02, 1)}
            className={`${styles.heroSubText} text-white-100 mt-2`}
          >
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </motion.p>
        </div>
      </div>
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center pointer-events-none">
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
