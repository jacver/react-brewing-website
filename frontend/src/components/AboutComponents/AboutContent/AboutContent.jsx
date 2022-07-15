// frontend\src\components\AboutContent\AboutContent.jsx

import React from "react";
import "./aboutcontent.css";

function AboutContent() {
  const daddies = [
    {
      name: "Jacob Vernau",
      state: "Virginia",
      role: "Co-Owner",
      description:
        "'People aren't very good listeners, by nature ... Part of being a good communicator is recognizing and understanding that and trying to make the complex simple. I try to capture a concept, an idea or a moment in a few words. If they remember it, job done.' - Mike Tomlin",
      photo: "https://i.imgur.com/rU16MOq.png",
    },
    {
      name: "Nick Billingsley",
      state: "Colorado",
      role: "Co-Owner",
      description:
        "'People aren't very good listeners, by nature ... Part of being a good communicator is recognizing and understanding that and trying to make the complex simple. I try to capture a concept, an idea or a moment in a few words. If they remember it, job done.' - Mike Tomlin",
      photo: "https://i.imgur.com/rU16MOq.png",
    },
  ];

  return (
    <div className="about-content-wrapper bg-dark text-white d-flex flex-column flex-md-row flex-lg-row justify-content-evenly align-items-center text-center">
      {daddies.map((daddy, idx) => {
        return (
          <div key={idx} className="dad-card mb-5">
            <img
              src={daddy.photo}
              alt={"Employee Portrait"}
              style={{ maxWidth: "80%", maxheight: "100%" }}
            />
            <h1 className="p-3">{daddy.name}</h1>
            <p>{daddy.role}</p>
            <p className="card-description p-10">{daddy.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AboutContent;
