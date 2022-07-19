// src/components/Tours/DatePicker.jsx

import React from "react";
import { useState, useEffect } from "react";

// flatpickr imports
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
// flatpickr docs: https://flatpickr.js.org/events/#events

function DatePicker() {
  const [date, setDate] = useState();

  const handleDateChange = (selectedDates, dateStr, instance) => {
    setDate(dateStr);
    console.log(dateStr);
  };

  // Fetch Django Dates
  const ToursRestEndpoint = "tours";

  const [Tours, setTours] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + ToursRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        // console.log(data);
      });
  }, []);

  // console.log(Tours);

  return (
    <div>
      {!Tours ? (
        <h1>Retrieving Tour Dates</h1>
      ) : (
        <Flatpickr
          value={date}
          onChange={handleDateChange}
          options={{
            inline: true, // calendar always open
            minDate: "today", // disable dates < today
            altInput: true, // allows alt formatting
            altFormat: "F j, Y", // alt formatting
            dateFormat: "m/d/Y ", // visual formatting
            disable: [
              function (date) {
                // return true to disable
                return date.getDay() === 0 || date.getDay() === 6;
              },
              function (date) {
                Tours.map((tour) => {
                  // Format date object to mm/dd/yyyy for comparison
                  let formattedDate =
                    ("0" + (date.getMonth() + 1)).slice(-2) +
                    "/" +
                    ("0" + date.getDate()).slice(-2) +
                    "/" +
                    date.getFullYear();

                  // If formatted date and tour.date are equal AND boolean TRUE for reserved, block date on calendar
                  if (formattedDate === tour.date && tour.reserved) {
                    // console.log("RESERVED DAY: ", tour.date);
                    return tour.date;
                  } else {
                    // console.log("UNRESERVED DAY: ", tour.date);
                    return false;
                  }
                });
              },
              // Tours[1].date, // THIS WORKS TO DISABLE A DAY, NEED TO FEED ALL DATES
            ],
            locale: {
              firstDayOfWeek: 1, // start week on Monday
            },
          }}
        />
      )}
    </div>
  );
}

export default DatePicker;
