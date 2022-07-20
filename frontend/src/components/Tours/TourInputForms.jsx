// frontend/src/components/Tours/TourInputForms.jsx

import React from "react";
import { useState, useEffect } from "react";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// flatpickr imports
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { FloatingLabel } from "react-bootstrap";
import axios from "axios";
// flatpickr docs: https://flatpickr.js.org/events/#events

function TourInputForms() {
  // Fetching Tour Info
  const ToursRestEndpoint = "tours";

  const [Tours, setTours] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + ToursRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
      });
  }, []);

  // Initial State Management
  const initialState = {
    date: "",
    email: "",
    additional_info: "",
    reserved: false,
  };
  const [details, setDetails] = useState(initialState);

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
                    function (date) {
                      // console.log(date);
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
                          return true;
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
