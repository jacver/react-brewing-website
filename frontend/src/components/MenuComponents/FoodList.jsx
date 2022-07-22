import React from "react";

import FoodCard from "./FoodCard/FoodCard";

function FoodList() {
  return (
    <>
      <h1 className="vintage-font">Food Menu</h1>
      <section
        className="card-container d-flex flex-wrap justify-content-center align-items-center"
        style={{ gap: "3rem" }}
      >
        <FoodCard />
      </section>
    </>
  );
}

export default FoodList;
