// src/pages/Welcome/Welcome.jsx

import React from "react";
import "./welcome.css";

// React Icon Imports
import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";

function Welcome() {
  return (
    <div className="welcomeWrapper text-light p-1">
      <div className="bannerWrapper d-flex flex-wrap flex-column justify-content-center align-items-center mb-5 ">
        <div style={{ width: "20rem" }} className="logoContainer">
          <img
            style={{ width: "100%" }}
            className="logo"
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            alt="logo"
          />
        </div>
        <h1>Welcome, dude</h1>
      </div>
      <div className="welcomeContent mb-5">
        <p>Taproom & Outdoor Seating Available</p>
        <p>Weekdays: 11am - 10pm</p>
        <p>Weekends: 10am - 11pm</p>
        <p>
          <a href="/">Tours</a> offered on weekdays from 11am - 12pm and 2pm-3pm
        </p>
      </div>
      <div className="ageAuth mb-5">
        <p>To see more, please verify you are of legal drinking age</p>
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
      <div className="socialsWrapper w-50" style={{ margin: "0 auto" }}>
        <div className="socialsRow d-flex align-items-center justify-content-center gap-5 fs-4">
          <a className="socials-icon" href="https://github.com/jacver">
            <FaGithub />
          </a>
          <a
            className="socials-icon"
            href="https://www.linkedin.com/in/jacobvernau/"
          >
            <FaLinkedin />
          </a>
          <a className="socials-icon" href="https://www.jacobvernau.com/">
            <FaRegUser />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
