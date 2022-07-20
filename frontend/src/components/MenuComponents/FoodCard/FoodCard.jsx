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
              <Card.Body className="d-flex p-1" style={{ gap: "1rem" }}>
                <div className="column-1">
                  <div className="food-label-container ">
                    <img
                      src={food.image_URL}
                      alt="" // alt tag empty as adjacent text describes item - https://www.w3.org/WAI/tutorials/images/decorative/
                      className="food-label"
                    />
                  </div>
                </div>
                <div className="column-2 w-100 d-flex flex-column justify-content-between align-items-between">
                  <div className="food-top-row d-flex justify-content-between align-items-between">
                    <div>{food.name}</div>
                    <div>${food.price}</div>
                  </div>
                  <div className="food-desc-container">{food.description}</div>
                  <div className="food-tags align-self-end">{food.tags}</div>
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
