import { useEffect, useRef, useState } from "react";
import mascotImg from "../assets/mockups/desktop/desktop-userlogin.png";

const messages = [
  "Welcome! I'm your creative assistant.",
  "Need help? Just ask!",
  "Explore the site and have fun!",
  "Click around to discover more.",
  "I'm here if you need a tip!"
];

const Mascot = () => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const mascotRef = useRef<HTMLDivElement>(null);

  // Cycle messages every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx((i) => (i + 1) % messages.length);
      setBubbleVisible(true);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animate mascot (gentle float)
  useEffect(() => {
    if (!mascotRef.current) return;
    mascotRef.current.animate([
      { transform: "translateY(0px)" },
      { transform: "translateY(-8px)" },
      { transform: "translateY(0px)" }
    ], {
      duration: 3000,
      iterations: Infinity
    });
  }, []);

  return (
    <div
      ref={mascotRef}
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
      style={{ pointerEvents: "none" }}
    >
      <img
        src={mascotImg}
        alt="Mascot"
        className="w-32 h-32 rounded-full shadow-xl border-4 border-teal-400 bg-white animate-fade-in"
        style={{ pointerEvents: "auto" }}
        onMouseEnter={() => setBubbleVisible(true)}
        onClick={() => setBubbleVisible((v) => !v)}
      />
      {bubbleVisible && (
        <div className="relative -top-4 left-24 bg-white text-black rounded-lg shadow-lg px-4 py-2 text-sm max-w-xs animate-fade-in" style={{ pointerEvents: "auto" }}>
          <span>{messages[msgIdx]}</span>
        </div>
      )}
    </div>
  );
};

export default Mascot;
