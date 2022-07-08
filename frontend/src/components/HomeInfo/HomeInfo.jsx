// frontend\src\components\HomeInfo\HomeInfo.jsx

import React from "react";
import "./homeinfo.css";

function HomeInfo() {
  return (
    <section className="homeInfoWrapper">
      <div className="home-inner d-flex flex-column justify-content-evenly align-items-evenly h-100">
        <h2>Welcome to the Slick Daddy Club</h2>
        <p>Enjoy your stay</p>
        <div className="homeInfoButtonsContainer d-flex flex-row justify-content-evenly align-items-around h-30">
          <a href="/" className="btnAnimation btn-up">
            OUR BEER
          </a>

          <a href="/" className="btnAnimation btn-down">
            OUR STORY
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
