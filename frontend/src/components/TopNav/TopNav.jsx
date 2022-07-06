import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function TopNav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="scrollspyTop"
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* vvvv Do not remove this empty nav list - will realign links from right to left vvvvv*/}
            <Nav className="me-auto"></Nav>
            {/* ^^^^ Do not remove this empty nav list - will realign links from right to left ^^^^*/}

            {/* START FUNCTIONAL NAV LINKS */}
            {/* -- scrollspy implemented to scroll to selected HTML element on click */}
            <Nav>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAboutMeTech">
                  Tech
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyProjects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact">
                  Contact
                </a>
              </li>

              {/* button for resume download */}
              <a
                href="https://docs.google.com/document/d/16bOtF7reWw2IHdM6CDNJbwEYCmzCy-Qz_R5VHmXOa6I/export?format=pdf"
                download="Jacob Vernau Resume.pdf"
              >
                <button type="button" className="btn btn-outline-warning">
                  <span>
                    <i className="fas fa-download"></i>
                  </span>
                  <span className="btn-text">Resume</span>
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
