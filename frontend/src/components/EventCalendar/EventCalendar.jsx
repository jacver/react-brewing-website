// frontend/src/components/EVentCalendar/EventCalendar.jsx

import React from "react";
import "./eventcalendar.css";

// Hooks
import { useState, useEffect } from "react";

// full calendar node package
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // allows click events

function EventCalendar() {
  const eventsRestEndpoint = "events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + eventsRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="calendar-container ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={window.innerWidth <= 765 ? "dayGridDay" : "dayGridMonth"} // detect screen size and render responsively
        events={{ events }}
        eventBackgroundColor="transparent"
        eventBorderColor="transparent"
        displayEventTime="True"
        displayEventEnd="True"
        // eventMouseEnter={handleEventMouseEnter} // TO-DO CONTENT INJECTION TOOLTIP
      />
    </div>
  );
}

export default EventCalendar;
