// frontend/src/components/Tours/TourBookingInfo.jsx

import React from "react";

function TourBookingInfo() {
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-start align-items-start"
        style={{ textAlign: "left", margin: "3rem" }}
      >
        <h2 className="vintage-font">
          TOUR <br />
          INFORMATION
        </h2>
        <p>
          Tours available every Weekday from 11:00 AM to 12:00 PM at no charge.
        </p>
        <p>
          Reservations: Please select an available date below and enter your
          contact information.
        </p>
        <p>
          Cancellations: If you need to cancel a reservation, please reach out
          to slickdaddybrewing@gmail.com so we can re-list the date for another
          party.
        </p>
      </div>
    </div>
  );
}

export default TourBookingInfo;
