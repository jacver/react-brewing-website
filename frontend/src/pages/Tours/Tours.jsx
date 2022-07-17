// src/pages/Tours/Tours.jsx

import React from "react";

// Component Imports
import TopNav from "../../components/TopNav/TopNav";
import TourBooking from "../../components/Tours/TourBooking";
import DatePicker from "../../components/Tours/DatePicker";
import Footer from "../../components/Footer/Footer";

function Tours() {
  return (
    <div>
      <TopNav />
      <TourBooking />
      <DatePicker />
      <Footer />
    </div>
  );
}

export default Tours;
