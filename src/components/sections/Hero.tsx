import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";



const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      {/* Hero background monitor image (clickable) */}
      <div
        className="absolute inset-0 -z-10 cursor-pointer select-none"
        style={{
          background: `url('/herobg.png') center/cover no-repeat`,
        }}
        onClick={() => navigate('/desktop')}
        title="Click to open desktop"
      />
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
           {" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 text-shadow`}>
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
