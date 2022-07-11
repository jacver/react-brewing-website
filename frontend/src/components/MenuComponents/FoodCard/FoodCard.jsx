// frontend/src/components/MenuComponents/FoodCard/FoodCard.jsx

import React from "react";

import "./foodcard.css";

// Hooks
import { useState, useEffect } from "react";

// bootstrap imports
import Card from "react-bootstrap/Card";

function FoodCard() {
  const FoodRestEndpoint = "food";

  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + FoodRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <>
      {!Foods ? (
        <h1>Fetching Food...</h1>
      ) : (
        Foods.map((food, idx) => {
          return (
            <Card
              key={idx}
              className="menu-card food-item"
              style={{ color: "white" }}
            >
              <Card.Body className="d-flex flex-column" style={{ gap: "1rem" }}>
                <div className="food-top-row w-100 d-flex justify-content-between align-items-center">
                  <div>{food.name}</div>
                  <div>${food.price}</div>
                </div>
                <div className="food-middle-row w-100 d-flex justify-content-between align-items-center">
                  <div className="food-label-container">
                    <img
                      src={food.image_URL}
                      alt={food.name}
                      className="food-label"
                    />
                  </div>
                  <div>{food.description}</div>
                </div>
                <div className="food-bottom-row w-100 d-flex flex-row-reverse justify-content-between align-items-center">
                  {food.tags === "none" ? "" : <p>{food.tags}</p>}
                </div>
              </Card.Body>
            </Card>
          );
        })
      )}
    </>
  );
}

export default FoodCard;
