// src/pages/Welcome/Welcome.jsx

import React from "react";
import "./welcome.css";

function Welcome() {
  return (
    <div className="welcomeWrapper text-light">
      <div className="bannerWrapper d-flex flex-column justify-content-center align-items-center mb-5">
        <div style={{ width: "20em" }} className="logoContainer">
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
        <a href="/" className="btnAnimation btn-up">
          Over 21
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Curiosity_killed_the_cat"
          className="btnAnimation btn-down"
        >
          Under 21
        </a>
      </div>
      <div className="socialsWrapper">
        <p>socials links if i make them</p>
      </div>
    </div>
  );
}

export default Welcome;
