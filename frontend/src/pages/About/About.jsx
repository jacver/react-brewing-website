//  frontend\src\pages\About\About.jsx

import React from "react";

// Component imports
import TopNav from "../../components/TopNav/TopNav";
import AboutContent from "../../components/AboutComponents/AboutContent/AboutContent";
import AboutImagePanel from "../../components/AboutComponents/AboutImagePanel";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <TopNav />
      <AboutContent />
      <AboutImagePanel />
      <Footer />
    </>
  );
}

export default About;
