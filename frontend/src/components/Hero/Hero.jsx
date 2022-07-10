//  frontend\src\components\Hero\Hero.jsx

import React from "react";
import "./hero.css";

// React Icon Import
import { HiChevronDoubleDown } from "react-icons/hi";

function Hero() {
  return (
    <div className="hero d-flex flex-column justify-content-evenly">
      <section>
        <div className="hero-inner">
          <h1>SLICK DADDY's BREWING CO</h1>
          <h2>beer beer beer beer beer</h2>
        </div>
      </section>
      <div className="hero-scroll" style={{ fontSize: "5rem" }}>
        <HiChevronDoubleDown />
      </div>
    </div>
  );
}

export default Hero;
