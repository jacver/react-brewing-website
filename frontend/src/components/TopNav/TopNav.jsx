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
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
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
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAboutMeTech">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyProjects">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact">
                  Tours
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact">
                  Visit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact">
                  About
                </a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
