// frontend/src/components/Tours/TourInputForms.jsx

import React from "react";
import { useState, useEffect } from "react";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TourInputForms() {
  // states & functions here
  const initialState = {
    date: "",
    email: "",
    additional_info: "",
    reserved: false,
  };
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    console.log(details);
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    // prevent default browser behavior
    e.preventDefault();
    // do something with details
    console.log(details);
    // reset form to initial values
    setDetails(initialState);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3" controlId="additional_information">
          <Form.Label>Additional information</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please include any other information that can help us personalize your visit."
            // value={details.additional_info}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default TourInputForms;
