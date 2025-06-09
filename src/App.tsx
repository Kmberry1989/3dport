import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoundProvider } from "./components/SoundManager";

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
import { useEffect } from "react";
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
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                  <Navbar />
                  {/* <Mascot /> */}
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
