import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

// 2D Desktop Experience component
const DesktopExperience = () => {
  const [currentAppUrl, setCurrentAppUrl] = useState<string | null>(null);
  const apps = [
    { name: "My Contributions", url: "/contributions.html" },
    { name: "Minesweeper", url: "/apps/minesweeper.html" },
    { name: "Paint", url: "/apps/mspaint.html" },
    // Add more apps as needed
  ];
  const openApp = (url: string) => setCurrentAppUrl(url);
  const closeApp = () => setCurrentAppUrl(null);
  return (
    <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
      <div className="mb-4 flex flex-wrap justify-center gap-4 p-4">
        {apps.map((app) => (
          <button
            key={app.name}
            onClick={() => openApp(app.url)}
            className="bg-teal-mid shadow-primary rounded-lg p-3 text-white hover:bg-opacity-80"
          >
            {app.name}
          </button>
        ))}
      </div>
      <div className="relative h-[300px] w-[400px] bg-gray-800 rounded-2xl shadow-lg p-4 flex items-center justify-center">
        <div className="h-full w-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
          {currentAppUrl ? (
            <div className="relative h-full w-full">
              <iframe
                src={currentAppUrl}
                title="Current App"
                className="h-full w-full border-0 rounded"
              />
              <button
                onClick={closeApp}
                className="absolute right-2 top-2 bg-red-500 px-2 py-1 text-xs text-white rounded"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              <p>Click an icon to open an "app".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm{" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      {/* DesktopExperience replaces ComputersCanvas */}
      <div className="absolute left-0 right-0 top-1/3 flex justify-center">
        <DesktopExperience />
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
