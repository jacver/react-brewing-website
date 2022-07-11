// frontend/src/components/MenuComponents/BeerCard/BeerCard.jsx

import React from "react";
import "./beercard.css";

// Hooks
import { useState, useEffect } from "react";

// bootstrap imports
import Card from "react-bootstrap/Card";

function BeerCard() {
  const beerRestEndpoint = "beer";

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + beerRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, []);

  return (
    <>
      {!beers ? (
        <h1>Fetching beer...</h1>
      ) : (
        beers.map((beer, idx) => {
          return (
            <Card
              key={idx}
              className="beer-card"
              style={{ width: "30rem", color: "white" }}
            >
              <Card.Body className="d-flex" style={{ gap: "1rem" }}>
                <div className="label-container">
                  <img
                    className="label bg-light w-100"
                    alt="Beer Label"
                    src={beer.label_URL}
                  />
                </div>

                <div className="info-rows w-100 d-flex flex-column">
                  <div className="card-middle-row">
                    <p style={{ color: "#59ff48", fontSize: "1.5rem" }}>
                      {beer.name}
                    </p>
                    <p>{beer.brewer}</p>
                  </div>
                  <div className="card-bottom-row">
                    <p>{beer.description}</p>
                  </div>
                  <div className="card-top-row d-flex flex-row justify-content-between p-1 ">
                    <p>{beer.beer_type}</p>
                    <div className="abv-info d-flex">
                      <p className="vert-text" style={{ color: "#59ff48" }}>
                        ABV
                      </p>
                      <p style={{ fontSize: "1.75em" }}>{beer.abv}</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })
      )}
    </>
  );
}

export default BeerCard;
