// frontend/src/components/Tours/TourInputForms.jsx

import React from "react";
import { useState, useEffect } from "react";

// Axios for post
import axios from "axios";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// flatpickr imports
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
// flatpickr docs: https://flatpickr.js.org/events/#events

// =========================================
// ====================FORM NOTES===========
// =========================================
//
// 1. Initial State set - forms cleared out

// 2. Tour dates are passed as props
// //  2a. Tour state managed
// //  2b. Determine open dates using fetched tours.date

// 3. Flatpickr used to determine available dates - disables dates that already have a reservation

// 4. Email address and additional information set by input

// 5. Reserved boolean set on submit

// HELPER FUNCTIONS:
// // HandleDateChange - sets inputs for step 3
// // handleChange - sets inputs for step 4
// // handleSubmit - post form - don't prevent default so that calendar is forced to re-render with new information

function TourInputForms({ Tours }) {
  // Initial State Management
  const initialState = {
    date: "",
    email: "",
    additional_info: "",
    reserved: false,
  };
  const [details, setDetails] = useState(initialState);

  // Initialize empty date array - will be passed to date picker's disable config to block out reserved dates
  let dateArray = [];

  // map through Tour Obj to get the dates
  Tours.map((tourObj) => {
    // push date strings into date array
    dateArray.push(tourObj.date);
  });

  // Date Picker State Mgmt
  const [date, setDate] = useState("");

  // Date Change Handler
  const handleDateChange = (selectedDates, dateStr, instance) => {
    setDate(dateStr);
  };

  // Input Change Handler (Email/Addt'l Info)
  const handleChange = (e) => {
    console.log(details);
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  // Submission Handler
  const handleSubmit = (e) => {
    axios
      .post("https://back-brewery.herokuapp.com/tours/", {
        // posting date from datepicker
        date: date,
        // email and additional info posted from details
        email: details.email,
        additional_info: details.additional_info,
        // mark reserved to true as it's now booked
        reserved: true,
      })
      .then((res) => {
        console.log(res.data);
        setDetails(initialState);
      });
  };

  // FORM STRUCTURE
  // 1. Date from Flatpickr
  // 2. Email
  // 3. Additional Information

  return (
    <div>
      <div>
        {!Tours ? (
          <h1>Retrieving Tour Dates</h1>
        ) : (
          <Form onSubmit={handleSubmit}>
            {/* DATE PICKER IN FORM */}
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Select a date</Form.Label>
              <Flatpickr
                value={date}
                id="date"
                onChange={handleDateChange}
                options={{
                  inline: true, // calendar always open
                  minDate: "today", // disable dates < today
                  altInput: true, // allows alt formatting
                  altFormat: "F j, Y", // alt formatting
                  dateFormat: "m/d/Y ", // visual formatting
                  disable: [
                    function (date) {
                      // return true to disable day - disabling Sat & Sun w/ this function
                      return date.getDay() === 0 || date.getDay() === 6;
                    },
                    ...dateArray,
                  ],
                  locale: {
                    firstDayOfWeek: 1, // start week on Monday
                  },
                }}
              />
            </Form.Group>

            {/* END DATE PICKER, START FORMS */}

            {/* email group */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={details.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {/* extra information */}
            <Form.Group className="mb-3" controlId="additional_info">
              <Form.Label>Additional information</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please include any other information that can help us personalize your visit."
                // value={details.additional_info}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default TourInputForms;
