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
        "Often voted as having the firmest handshake in the Rocky Mountains, Jake's vision for a brewery came to him while he ran a 3 minute mile (above average speed). After watching all three Shrek movies back-to-back, the vision for Slick Daddy's Brewing Company shined more clear than ever. The rest is history.",
      photo: "https://i.imgur.com/4s4omug.png",
    },
    {
      name: "Nick Billingsley",
      state: "Colorado",
      role: "Co-Owner",
      description:
        "Nick's first taste of a gogurt is what spurred his dreams of becoming a brewer. His earliest memories center around enjoying an ice cold gogurt while his dad savored a Miller Lite (fine pilsner). As he grew up he set his sights on opening his own brewery here in Denver. With a knack for art & design, he carefully crafts all of our brew labels.",
      photo: "https://i.imgur.com/XZ0yGwc.jpg",
    },
  ];

  return (
    <div
      style={{}}
      className="about-content-wrapper bg-dark text-white d-flex flex-column flex-md-row flex-lg-row justify-content-evenly align-items-center text-center"
    >
      {daddies.map((daddy, idx) => {
        return (
          <div key={idx} className="dad-card mb-5">
            <img
              src={daddy.photo}
              alt={"Employee Portrait"}
              style={{ maxWidth: "80%", height: "100%" }}
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
