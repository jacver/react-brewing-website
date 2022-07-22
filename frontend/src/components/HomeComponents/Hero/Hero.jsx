//  frontend\src\components\Hero\Hero.jsx

import React from "react";
import "./hero.css";

// React Icon Import
import { HiChevronDoubleDown } from "react-icons/hi";

function Hero() {
  return (
    <div className="hero d-flex flex-column justify-content-evenly">
      <section>
        <div className="hero-inner ">
          <h1>
            SLICK DADDY'S <br />
            BREWING COMPANY
          </h1>
        </div>
      </section>
      <a
        className="hero-scroll"
        href="#homeAbout"
        style={{ fontSize: "10rem", textDecoration: "none", color: "#59ff48" }}
      >
        <HiChevronDoubleDown />
      </a>
    </div>
  );
}

export default Hero;
