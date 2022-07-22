// frontend\src\components\HomeInfo\HomeInfo.jsx

import React from "react";
import "./homeinfo.css";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeInfo() {
  return (
    <section className="homeInfoWrapper pt-5 pb-5">
      <div className="home-inner d-flex flex-column justify-content-center align-items-evenly h-100">
        <div className="homeInfoButtonsContainer d-flex flex-column flex-md-row justify-content-evenly align-items-center">
          {/* TOUR CARD */}
          <a
            className="card-link m-0 mt-5"
            href="https://slickdaddysbrewing.com/tours"
            aria-label="Book Tour"
          >
            <Card
              className="bg-dark p-3"
              style={{ width: "18rem", minHeight: "30rem" }}
            >
              <Card.Img variant="top" src="https://i.imgur.com/hisgFWn.png" />
              <Card.Body>
                <Card.Title
                  className="vintage-font fs-3"
                  style={{ color: "#59ff48" }}
                >
                  BOOK A TOUR
                </Card.Title>
                <Card.Text>
                  Tours available by reservation. Weekdays from 11 AM to 12 PM.
                </Card.Text>
                <Button variant="outline-light">BOOK NOW</Button>
              </Card.Body>
            </Card>
          </a>

          {/* MENU CARD*/}
          <a
            className="card-link m-0"
            href="https://slickdaddysbrewing.com/menu"
            aria-label="View Menu"
          >
            <Card
              className="bg-dark p-3 m-0"
              style={{ width: "18rem", minHeight: "30rem" }}
            >
              <Card.Img variant="top" src="https://i.imgur.com/lOjs8ty.png" />
              <Card.Body>
                <Card.Title
                  className="vintage-font fs-3"
                  style={{ color: "#59ff48" }}
                >
                  EAT & DRINK
                </Card.Title>
                <Card.Text>
                  We carry a wide selection of beers and foods from across the
                  globe.
                </Card.Text>
                <Button variant="outline-light">MENU</Button>
              </Card.Body>
            </Card>
          </a>

          {/* EVENTS CARD*/}
          <a
            className="card-link m-0"
            href="https://slickdaddysbrewing.com/events"
            aria-label="View Events"
          >
            <Card
              className="bg-dark p-3"
              style={{ width: "18rem", minHeight: "30rem" }}
            >
              <Card.Img variant="top" src="https://i.imgur.com/sONs58S.png" />
              <Card.Body>
                <Card.Title
                  className="vintage-font fs-3"
                  style={{ color: "#59ff48" }}
                >
                  EVENTS
                </Card.Title>
                <Card.Text>
                  Visit us for trivia, music, and food trucks! View the calendar
                  for more information.
                </Card.Text>
                <Button variant="outline-light">EVENTS</Button>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
