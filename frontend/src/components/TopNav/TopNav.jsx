// frontend/src/components/TopNav/TopNav.jsx

// React
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./topnav.css";

// Bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";

function TopNav() {
  return (
    <div>
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
                <Link to={"/menu"} className={"nav-Link"}>
                  <a className="nav-link" href="/menu">
                    Menu
                  </a>
                </Link>
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
                <Link to={"/about"} className={"nav-Link"}>
                  <a className="nav-link" href="/about">
                    Meet The Daddies
                  </a>
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
