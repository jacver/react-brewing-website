// frontend/src/components/Tours/TourInputForms.jsx

import React from "react";

// bootstrap imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TourInputForms() {
  return (
    <div>
      <Form>
        {/* email group */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* extra information */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional information</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please include any other information that can help us personalize your visit."
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
