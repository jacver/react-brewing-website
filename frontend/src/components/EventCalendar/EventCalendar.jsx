// frontend/src/components/EVentCalendar/EventCalendar.jsx

import React from "react";
import "./eventcalendar.css";

// Hooks
import { useState, useEffect } from "react";

// TO DO: FullCalendar is installed and rendering the google calendar. The calendar events are not populating however. Utilize iFrame for calendar until fixed

// full calendar node package
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // allows click events
import googleCalendarPlugin from "@fullcalendar/google-calendar";

function EventCalendar() {
  const googleCalendarURL = process.env.REACT_APP_GOOGLE_API_KEY;
  const myGoogleCalendarID = process.env.REACT_APP_GOOGLE_ID;

  // const herokuURL = "https://back-brewery.herokuapp.com/events/";

  const eventsRestEndpoint = "events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + eventsRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);

  // When a date grid is clicked, this function will invoke
  const handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo.dateStr);
  };

  return (
    <div className="calendar-container ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        googleCalendarApiKey={googleCalendarURL}
        // events={[{ googleCalendarId: myGoogleCalendarID }]}
        events={{ events }}
      />
      {/* <iframe
        title="Event Calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23b3b3b3&ctz=America%2FDenver&showPrint=0&showTabs=1&showTitle=0&src=c2xpY2tkYWRkeWJyZXdpbmdAZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%2333B679&color=%230B8043"
        style={{ borderWidth: "0" }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe> */}
    </div>
  );
}

export default EventCalendar;
