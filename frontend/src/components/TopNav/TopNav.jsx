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
          {/* <Navbar.Brand href="/home">SLICK DADDY'S</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* START FUNCTIONAL NAV LINKS */}
            <Nav>
              <div className="nav-group">
                <li className="nav-item">
                  <Link to={"/home"} className={"nav-Link"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/menu"} className={"nav-Link"}>
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/events"} className={"nav-Link"} href="/events ">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/tours"} className={"nav-Link"}>
                    Tours
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className={"nav-Link"}>
                    Meet The Daddies
                  </Link>
                </li>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
