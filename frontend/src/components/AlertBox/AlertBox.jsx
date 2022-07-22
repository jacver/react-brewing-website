// src/components/AlertBox/AlertBox.jsx

import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";

function AlertBox() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="dark" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Looking for events?</Alert.Heading>
        <p>
          This component fetches data from a database hosted on Heroku. Heroku
          apps can take a few seconds to "wake-up" if they haven't been used for
          a few hours. If you're not seeing any data this might be why!
        </p>
      </Alert>
    );
  }
}

export default AlertBox;
