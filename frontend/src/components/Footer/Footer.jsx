// frontend/src/components/Footer/Footer.jsx

import React from "react";
import "./footer.css";

import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper bg-dark text-white flex-column flex-md-row flex-lg-row d-flex p-5 justify-content-evenly align-items-center">
      <div className="footer-column">
        <h2 style={{ color: "#59ff48", textAlign: "left" }}>VISIT</h2>
        <div
          className="footer-column-1 d-flex justify-content-start "
          style={{ gap: "3rem", width: "50vw" }}
        >
          <div>
            <p>123 Fake Rd. Denver, CO 12345</p>
          </div>
          <div className="contact-wrapper d-flex flex-column">
            <a href="https://www.google.com/maps/dir//West+Arvada+Dog+Park,+17975+W+64th+Ave,+Arvada,+CO+80005/@39.817495,-105.2408161,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876b8fc44c0fc067:0x614942ba6afdea18!2m2!1d-105.2057967!2d39.8174343">
              Get Directions
            </a>
            <a href="tel:123-456-7890">+1 123-456-7890</a>
            <a href="mailto:info@sdcb.com">info@sdcb.com</a>
          </div>
          <div className="hours-wrapper d-flex flex-column">
            <p>
              <span style={{ color: "#59ff48" }}>Weekdays: </span>11am - 10pm
            </p>
            <p>
              <span style={{ color: "#59ff48" }}>Weekends: </span> 10am - 11pm
            </p>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <div className="socialsRow d-flex align-items-center justify-content-center gap-5 fs-4">
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
            aria-label="Link to personal LinkedIn page"
          >
            <FaLinkedin />
          </a>
          <a
            className="socials-icon"
            href="https://www.jacobvernau.com/"
            aria-label="Link to personal portfolio website"
          >
            <FaRegUser />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
