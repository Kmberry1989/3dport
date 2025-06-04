import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const desktopApps = [
  { name: "My Documents", id: "documents" },
  { name: "My Pictures", id: "pictures" },
  { name: "Browser", id: "browser" },
  { name: "Solitaire", id: "solitaire" },
  { name: "Minesweeper", id: "minesweeper" },
];

const AppMockup = ({
  appId,
  onClose,
}: {
  appId: string;
  onClose: () => void;
}) => {
  let content = null;
  switch (appId) {
    case "documents":
      content = (
        <div className="p-6 text-left text-black bg-white rounded-lg w-full h-full">
          📁 <b>My Documents</b>
          <ul className="mt-2 list-disc pl-4">
            <li>Resume.docx</li>
            <li>ProjectPlan.pdf</li>
            <li>Notes.txt</li>
          </ul>
        </div>
      );
      break;
    case "pictures":
      content = (
        <div className="p-6 text-center text-black bg-white rounded-lg w-full h-full">
          🖼️ <b>My Pictures</b>
          <div className="flex gap-2 justify-center mt-2">
            <div className="w-16 h-16 bg-gray-300 rounded shadow-inner"></div>
            <div className="w-16 h-16 bg-gray-200 rounded shadow-inner"></div>
          </div>
        </div>
      );
      break;
    case "browser":
      content = (
        <div className="p-6 text-left text-black bg-white rounded-lg w-full h-full">
          🌐 <b>Browser</b>
          <div className="mt-2">
            https://portfolio.local
            <br />
            <div className="mt-2 p-2 bg-gray-100 rounded">
              Welcome to your simulated browser!
            </div>
          </div>
        </div>
      );
      break;
    case "solitaire":
      content = (
        <div className="p-6 text-center text-black bg-white rounded-lg w-full h-full">
          🃏 <b>Solitaire</b>
          <div className="mt-2">[Solitaire mockup here]</div>
        </div>
      );
      break;
    case "minesweeper":
      content = (
        <div className="p-6 text-center text-black bg-white rounded-lg w-full h-full">
          💣 <b>Minesweeper</b>
          <div className="mt-2">[Minesweeper mockup here]</div>
        </div>
      );
      break;
    default:
      content = null;
  }
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-end justify-start">
      <button
        onClick={onClose}
        className="m-2 rounded bg-red-500 px-3 py-1 text-xs text-white"
      >
        Close
      </button>
      <div className="flex-1 w-full flex items-center justify-center">
        {content}
      </div>
    </div>
  );
};

const DesktopExperience = ({ onClose }: { onClose: () => void }) => {
  const [openApp, setOpenApp] = useState<string | null>(null);
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center">
      {/* Glowing monitor screen */}
      <div className="relative w-[420px] h-[320px] bg-gradient-to-b from-cyan-300 via-teal-400 to-black rounded-2xl shadow-2xl flex flex-col items-center justify-center border-4 border-cyan-200 animate-pulse-slow">
        {/* Desktop icons */}
        {!openApp && (
          <div className="flex flex-wrap gap-8 justify-center items-center w-full h-full">
            {desktopApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setOpenApp(app.id)}
              >
                <div className="w-16 h-16 bg-white/80 rounded-lg shadow-lg border-2 border-cyan-400 group-hover:scale-110 transition-transform flex items-center justify-center text-2xl text-cyan-700">
                  {app.name === "Solitaire"
                    ? "🃏"
                    : app.name === "Minesweeper"
                    ? "💣"
                    : app.name === "Browser"
                    ? "🌐"
                    : app.name === "My Pictures"
                    ? "🖼️"
                    : "📁"}
                </div>
                <span className="mt-2 text-xs text-white drop-shadow">
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        )}
        {openApp && (
          <AppMockup appId={openApp} onClose={() => setOpenApp(null)} />
        )}
      </div>
      {/* Click outside to close desktop */}
      <button
        onClick={onClose}
        className="absolute right-2 top-2 z-30 rounded bg-black/60 px-2 py-1 text-xs text-white"
      >
        Exit Desktop
      </button>
    </div>
  );
};

const Hero = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      {/* Hero background monitor image (clickable) */}
      <div
        className="absolute inset-0 -z-10 cursor-pointer select-none"
        style={{
          background: `url('/herobg.png') center/cover no-repeat`,
        }}
        onClick={() => setDesktopOpen(true)}
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
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>
      {/* Show desktop only when monitor is clicked */}
      {desktopOpen && (
        <DesktopExperience onClose={() => setDesktopOpen(false)} />
      )}
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
