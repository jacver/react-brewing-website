// src/pages/Tours/Tours.jsx

import React from "react";
import { useState, useEffect } from "react";

// Component Imports
import TopNav from "../../components/TopNav/TopNav";
import TourBookingInfo from "../../components/Tours/TourBookingInfo";
import TourInputForms from "../../components/Tours/TourInputForms";
import Footer from "../../components/Footer/Footer";

function Tours() {
  // Fetching Tour Info to pass to forms
  const ToursRestEndpoint = "tours";
  const [Tours, setTours] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + ToursRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      });
  }, []);

  return (
    <div className="bg-dark text-white">
      <TopNav />
      <TourBookingInfo />
      <div className="tour-forms d-flex flex-column flex-md-row justify-content-evenly align-items-center pb-5">
        <TourInputForms Tours={Tours} />
      </div>
      <Footer />
    </div>
  );
}

export default Tours;
