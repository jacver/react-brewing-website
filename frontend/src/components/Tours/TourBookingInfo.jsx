// frontend/src/components/Tours/TourBookingInfo.jsx

import React from "react";

function TourBookingInfo() {
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center pt-5 mt-5 fs-4"
        style={{ margin: "0 auto" }}
      >
        <h2
          className="vintage-font mb-5"
          style={{ fontSize: "3rem", margin: "0 auto" }}
        >
          TOUR <br />
          INFORMATION
        </h2>
        <p>
          Tours available every Weekday from{" "}
          <span style={{ color: "#59ff48" }}>from 11:00 AM to 12:00 PM</span> at
          no charge.
        </p>
        <p>
          <span style={{ color: "#59ff48" }}> Reservations: </span>
          Please select an available date below and enter your contact
          information.
        </p>
        <p>
          <span className="mb-5" style={{ color: "#59ff48" }}>
            Cancellations:{" "}
          </span>
          If you need to cancel a reservation, please reach out to
          slickdaddybrewing@gmail.com so we can re-list the date for another
          party.
        </p>
      </div>
    </div>
  );
}

export default TourBookingInfo;
