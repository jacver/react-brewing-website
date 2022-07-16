// frontend\src\pages\Home\Home.jsx

import React from "react";

// component imports
import TopNav from "../../components/TopNav/TopNav";
import Hero from "../../components/HomeComponents/Hero/Hero";
import HomeInfo from "../../components/HomeComponents/HomeInfo/HomeInfo";
import HomeBanner from "../../components/HomeComponents/HomeBanner/HomeBanner";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="homeWrapper">
      {/* COMPONENT IMPORT */}
      <TopNav />
      <Hero />
      <HomeBanner />
      <HomeInfo />
      <Footer />
    </div>
  );
}

export default Home;
