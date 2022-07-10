// frontend/src/components/Footer/Footer.jsx

import React from "react";
import "./footer.css";

import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper bg-dark text-white flex-column flex-md-row flex-lg-row d-flex p-5 justify-content-center align-items-center">
      <div className="footer-column">
        <h2 className="text-warning">VISIT</h2>
        <div>
          <p>123 Fake Rd.</p>
          <p>Denver, CO 12345</p>
        </div>
        <div className="contact-wrapper d-flex flex-column">
          <a href="https://www.google.com/maps/dir//West+Arvada+Dog+Park,+17975+W+64th+Ave,+Arvada,+CO+80005/@39.817495,-105.2408161,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876b8fc44c0fc067:0x614942ba6afdea18!2m2!1d-105.2057967!2d39.8174343">
            Get Directions
          </a>
          <a href="tel:123-456-7890">+1 123-456-7890</a>
          <a href="mailto:info@sdcb.com">info@sdcb.com</a>
        </div>
        <div className="hours-wrapper d-flex flex-column justify-content-between pt-3">
          <p>
            <span className="text-warning">Weekdays: </span>11am - 10pm
          </p>
          <p>
            <span className="text-warning">Weekends: </span> 10am - 11pm
          </p>
        </div>
      </div>
      <div className="footer-column">
        <iframe
          title="Arvada"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.534414301483!2d-105.20798538462229!3d39.81743427943929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8fc44c0fc067%3A0x614942ba6afdea18!2sWest%20Arvada%20Dog%20Park!5e0!3m2!1sen!2sus!4v1657337424272!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
    </footer>
  );
}

export default Footer;
