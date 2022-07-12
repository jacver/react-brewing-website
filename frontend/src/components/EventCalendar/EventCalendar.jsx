// frontend/src/components/EVentCalendar/EventCalendar.jsx

import React from "react";
import "./eventcalendar.css";

// full calendar node package
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // allows click events

function EventCalendar() {
  // When a date grid is clicked, this function will invoke
  const handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo.dateStr);
  };

  return (
    <div className="calendar-container ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default EventCalendar;
