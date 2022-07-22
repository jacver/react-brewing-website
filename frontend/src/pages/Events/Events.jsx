import React from "react";

// Application components
import TopNav from "../../components/TopNav/TopNav";
import AlertBox from "../../components/AlertBox/AlertBox";
import EventCalendar from "../../components/EventCalendar/EventCalendar";
import Footer from "../../components/Footer/Footer";

function Events() {
  return (
    <div className="bg-dark">
      <TopNav />
      <AlertBox />
      <h1>Events</h1>
      <EventCalendar />
      <Footer />
    </div>
  );
}

export default Events;
