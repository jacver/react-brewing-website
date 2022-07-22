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
        // console.log(data);
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
                    alt="" // alt tag empty as adjacent text describes item - https://www.w3.org/WAI/tutorials/images/decorative/
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
                      <p style={{ color: "#59ff48", fontSize: "1.75em" }}>
                        {beer.beer_type}
                      </p>
                    </div>
                    <p
                      style={{
                        color: "#59ff48",
                        fontSize: "1.75rem",
                        width: "100%",
                      }}
                    >
                      {beer.name}
                    </p>

                    <div className="card-middle-row">
                      <p>{beer.brewer}</p>
                    </div>
                    <div className="card-bottom-row p-2">
                      <p>{beer.description}</p>
                    </div>
                  </div>
                  <div
                    className="abv-info d-flex justify-content-center align-items-center "
                    style={{ gap: "5%" }}
                  >
                    <p className="" style={{ color: "#59ff48" }}>
                      ABV
                    </p>
                    <p style={{ fontSize: "1.75em" }}>{beer.abv}%</p>
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
