// frontend/src/components/Footer/Footer.jsx

import React from "react";
import "./footer.css";

import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper bg-dark text-white p-5 pb-0">
        <div className="footer-content-row d-flex justify-content-evenly align-items-evenly">
          <div className="contact-wrapper d-flex flex-column justify-content-start align-items-start">
            <p>Contact us:</p>
            <a aria-label="Business phone number" href="tel:123-456-7890">
              +1 123-456-7890
            </a>
            <a aria-label="Business email address" href="mailto:info@sdcb.com">
              info@sdcb.com
            </a>
          </div>
          <div className="contact-wrapper d-flex flex-column justify-content-start align-items-start">
            <p>Location:</p>
            <p className="m-0">123 Fake Rd.</p>
            <p className="m-0">Denver, CO</p>
            <p className="m-0">80237</p>
          </div>

          <div className="contact-wrapper d-flex flex-column justify-content-start align-items-start">
            <p>Hours:</p>
            <p className="m-0">Weekdays: 11am - 10pm</p>
            <p className="m-0">Weekdays: 10am - 11pm</p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-muted d-flex justify-content-evenly align-items-center p-5 pt-0">
        <p className="mb-0">Created by Jacob Vernau</p>
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
