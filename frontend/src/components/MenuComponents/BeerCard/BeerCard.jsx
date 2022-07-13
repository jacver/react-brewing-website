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
            <Card key={idx} className="beer-card" style={{ color: "white" }}>
              <Card.Body className="d-flex p-0" style={{ gap: "1rem" }}>
                <div className="label-container">
                  <img
                    className="label bg-light w-100"
                    alt="Beer Label"
                    src={beer.label_URL}
                  />
                </div>

                <div className="content-card w-100">
                  <div className="info-rows w-100 d-flex flex-column w-100">
                    <div className="card-top-row d-flex flex-row justify-content-between p-1 ">
                      <p
                        className="cost d-flex justify-content-center align-items-center"
                        style={{ fontSize: "1.75em" }}
                      >
                        ${beer.price}
                      </p>
                      <p style={{ color: "#59ff48", alignSelf: "center" }}>
                        {beer.beer_type}
                      </p>
                      <div className="abv-info d-flex">
                        <p className="vert-text" style={{ color: "#59ff48" }}>
                          ABV
                        </p>
                        <p style={{ fontSize: "1.75em" }}>{beer.abv}%</p>
                      </div>
                    </div>
                    <p
                      style={{
                        color: "#59ff48",
                        fontSize: "1.5rem",
                        width: "100%",
                      }}
                    >
                      {beer.name}
                    </p>
                    <div className="card-middle-row">
                      <p>{beer.brewer}</p>
                    </div>
                    <div className="card-bottom-row">
                      <p>{beer.description}</p>
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
