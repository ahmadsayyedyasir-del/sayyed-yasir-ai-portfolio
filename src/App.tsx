import { useEffect } from "react";
import GridBackground from "./components/ui/GridBackground";
import MouseGlow from "./components/ui/MouseGlow";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import Loader from "./components/ui/Loader";
import SmoothScroll from "./components/ui/SmoothScroll";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/hero/Hero";
import Philosophy from "./sections/philosophy/Philosophy";
import Technologies from "./sections/technologies/Technologies";
import Work from "./sections/work/Work";
import Journey from "./sections/journey/Journey";
import Certifications from "./sections/certifications/Certifications";
import Contact from "./sections/contact/Contact";
import FooterSection from "./sections/footer/FooterSection";

function App() {
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.body.classList.add("cursor-none");
    }
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <Loader />
      <SmoothScroll>
        <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
          <GridBackground />
          <MouseGlow />
          <CustomCursor />
          <ScrollProgress />

          <Navbar />

          <main>
            <Hero />
            <Philosophy />
            <Technologies />
            <Work />
            <Journey />
            <Certifications />
            <Contact />
          </main>

          <FooterSection />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;