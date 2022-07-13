import React from "react";

// Application components
import TopNav from "../../components/TopNav/TopNav";
import EventCalendar from "../../components/EventCalendar/EventCalendar";
import Footer from "../../components/Footer/Footer";

function Events() {
  return (
    <div className="">
      <TopNav />
      <h1>Events</h1>
      <EventCalendar />
      <Footer />
    </div>
  );
}

export default Events;
