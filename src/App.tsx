import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoundProvider } from "./components/SoundManager";
import { useEffect, useRef, useState } from "react";
import mascotSplash from "./assets/rochellecartoon.png";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Desktop,
} from "./components";
import { config } from "./constants/config";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      // Fade out as the bottom of content approaches the header (assume header is 80px)
      const windowHeight = window.innerHeight;
      const headerHeight = 80;
      const fadeStart = windowHeight - headerHeight * 2;
      const fadeEnd = windowHeight - headerHeight;
      const bottom = rect.bottom;
      if (bottom < fadeEnd) {
        setContentOpacity(0);
      } else if (bottom < fadeStart) {
        setContentOpacity((bottom - fadeEnd) / (fadeStart - fadeEnd));
      } else {
        setContentOpacity(1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 animate-fade-in-out">
          <img
            src={mascotSplash}
            alt="Mascot Splash"
            className="w-56 h-56 object-contain rounded-full shadow-2xl transition-opacity duration-700"
            style={{ animation: "fadeOut 0.7s 0.8s forwards" }}
            onError={e => { e.currentTarget.style.display = 'none'; const fallback = document.getElementById('mascot-fallback'); if (fallback) fallback.style.display = 'block'; }}
          />
          <div id="mascot-fallback" style={{display:'none',color:'white',fontSize:'2rem',fontWeight:'bold'}}>Mascot Splash</div>
          <style>{`
            @keyframes fadeOut { to { opacity: 0; } }
            .animate-fade-in-out { animation: fadeIn 0.3s, fadeOut 0.7s 0.8s forwards; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}</style>
        </div>
      )}
      {!showSplash && (
        <SoundProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="bg-solid-black relative z-0">
                    {/* Sticky Navbar always on top */}
                    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/40">
                      <Navbar />
                    </div>
                    {/* Content with blur when under header */}
                    <div
                      className="relative z-0"
                      ref={contentRef}
                      style={{
                        opacity: contentOpacity,
                        transition: 'opacity 0.3s',
                        filter: contentOpacity < 1 ? `blur(${(1 - contentOpacity) * 12}px)` : 'none',
                      }}
                    >
                      <Hero />
                      <About />
                      <Experience />
                      <Tech />
                      <Works />
                      <Feedbacks />
                      <div className="relative z-0">
                        <Contact />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/desktop" element={<Desktop />} />
            </Routes>
          </BrowserRouter>
        </SoundProvider>
      )}
    </>
  );
};

export default App;
