// src/pages/Tours/Tours.jsx

import React from "react";

// Component Imports
import TopNav from "../../components/TopNav/TopNav";
import TourBookingInfo from "../../components/Tours/TourBookingInfo";
// import DatePicker from "../../components/Tours/DatePicker";
import TourInputForms from "../../components/Tours/TourInputForms";
import Footer from "../../components/Footer/Footer";

function Tours() {
  return (
    <div className="bg-dark text-white">
      <TopNav />
      <TourBookingInfo />
      <div className="tour-forms d-flex flex-column flex-md-row justify-content-evenly align-items-center pb-5">
        {/* <DatePicker /> */}
        <TourInputForms />
      </div>
      <Footer />
    </div>
  );
}

export default Tours;
