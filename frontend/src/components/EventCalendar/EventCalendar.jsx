// frontend/src/components/EVentCalendar/EventCalendar.jsx

import React from "react";
import "./eventcalendar.css";

// full calendar node package
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // allows click events
import googleCalendarPlugin from "@fullcalendar/google-calendar";

function EventCalendar() {
  const googleCalendarURL = process.env.REACT_APP_GOOGLE_API_KEY;
  // const myGoogleCalendarID = process.env.REACT_APP_GOOGLE_ID;
  const myGoogleCalendarID = "slickdaddybrewing@gmail.com";

  const herokuURL = "https://back-brewery.herokuapp.com/events/";

  // When a date grid is clicked, this function will invoke
  const handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo.dateStr);
  };

  console.log(myGoogleCalendarID);

  return (
    <div className="calendar-container ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        googleCalendarApiKey={googleCalendarURL}
        events={[{ googleCalendarId: myGoogleCalendarID }]}
      />
    </div>
  );
}

export default EventCalendar;
