import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoundProvider } from "./components/SoundManager";
import { useEffect } from "react";

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

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <SoundProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-primary relative z-0">
                <div
                  className="absolute inset-0 -z-10 cursor-pointer select-none"
                  style={{ background: `url('/herobg.png') center/cover no-repeat` }}
                />
                <div className="relative z-0">
                  <Navbar />
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
  );
};

export default App;
