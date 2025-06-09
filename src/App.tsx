import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoundProvider } from "./components/SoundManager";
import Mascot from "./components/Mascot";
import { useState, useEffect } from "react";
import mascotSplash from "./assets/03ED5E95-57FC-40F6-A98B-D600807C04C8.png"; // update path if needed

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
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
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
          />
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
                  <div className="bg-primary relative z-0">
                    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                      <Navbar />
                      <Mascot />
                      <Hero />
                    </div>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className="relative z-0">
                      <Contact />
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
