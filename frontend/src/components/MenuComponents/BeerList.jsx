import React from "react";

import BeerCard from "./BeerCard/BeerCard";

function BeerList() {
  return (
    <>
      <h1 className="vintage-font">Beer Menu</h1>
      <section
        className="card-container d-flex flex-wrap justify-content-center align-items-center"
        style={{ gap: "3rem" }}
      >
        <BeerCard />
      </section>
    </>
  );
}

export default BeerList;
