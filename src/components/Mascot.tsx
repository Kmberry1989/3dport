import { useEffect, useRef, useState } from "react";
import mascotImg from "../assets/mockups/desktop/desktop-userlogin.png";

const Mascot = () => {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let bounce: Animation | undefined;
    if (mascotRef.current) {
      bounce = mascotRef.current.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-16px)" },
          { transform: "translateY(0px)" }
        ],
        {
          duration: 1800,
          iterations: Infinity
        }
      );
    }
    const timer1 = setTimeout(() => setSlideOut(true), 3500);
    const timer2 = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setSlideOut(false);
        setVisible(true);
      }, 2000);
    }, 4500);
    return () => {
      bounce?.cancel();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div
      ref={mascotRef}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-transform duration-700 ${
        slideOut ? "translate-x-[120vw] opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: "none" }}
    >
      <img
        src={mascotImg}
        alt="Mascot"
        className="w-40 h-40 rounded-full shadow-xl border-4 border-teal-400 bg-white animate-fade-in"
        draggable={false}
      />
    </div>
  );
};

export default Mascot;
