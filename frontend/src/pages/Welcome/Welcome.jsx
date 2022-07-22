// src/pages/Welcome/Welcome.jsx

import React from "react";
import "./welcome.css";

// React Icon Imports
import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";

function Welcome() {
  return (
    <div className="welcomeWrapper text-light p-1 fs-3">
      <div className="bannerWrapper d-flex flex-wrap flex-column justify-content-center align-items-center mb-5 ">
        <h1 className="welcomeBannerText" style={{ color: "#39ff14" }}>
          WELCOME TO THE <br />
          SLICK DADDY CLUB
        </h1>
      </div>
      <div className="welcomeContent mb-5">
        <p style={{ color: "#59ff48" }}>Taproom & Outdoor Seating Available</p>
        <p>
          <span style={{ color: "#59ff48" }}>Weekdays:</span> 11am - 10pm
        </p>
        <p>
          <span style={{ color: "#59ff48" }}>Weekends:</span> 10am - 11pm
        </p>
        <p>Tours offered on weekdays from 11am - 12pm</p>
      </div>
      <div className="ageAuth mb-5 fs-2">
        <p style={{ color: "#59ff48" }}>
          To see more, please verify you are of legal drinking age
        </p>
        <div className="ageGate d-flex gap-3 justify-content-center">
          <a href="/home">
            <div className="hover">
              <div className="box box-overage box1">Over</div>
              <div className="box box-overage box2 d-flex">21</div>
            </div>
          </a>

          <a href="https://en.wikipedia.org/wiki/Curiosity_killed_the_cat">
            <div className="hover">
              <div className="box box-underage box1">Under</div>
              <div className="box box-underage box2">21</div>
            </div>
          </a>
        </div>
      </div>
      <div className="socialsWrapper w-50 " style={{ margin: "0 auto" }}>
        <div className="socialsRow d-flex align-items-center justify-content-center gap-5 fs-1">
          <a
            className="socials-icon"
            href="https://github.com/jacver"
            aria-label="Link to personal GitHub page"
          >
            <FaGithub />
          </a>
          <a
            className="socials-icon"
            href="https://www.linkedin.com/in/jacobvernau/"
            aria-label="Link to LinkedIn page"
          >
            <FaLinkedin />
          </a>
          <a
            className="socials-icon"
            href="https://www.jacobvernau.com/"
            aria-label="Link to personal portfolio"
          >
            <FaRegUser />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
