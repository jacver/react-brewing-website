import React from "react";
import { useState, useEffect } from "react";

function APITest() {
  const beerRestEndpoint = "beer";

  const [beers, setBeers] = useState([]);

  console.log(process.env.REACT_APP_API_URL + beerRestEndpoint);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + beerRestEndpoint + "/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, []);

  return (
    <div>
      <h1>API test</h1>
      <ul>
        {!beers ? (
          <h1>Loading</h1>
        ) : (
          beers.map((beer, idx) => {
            return <li key={idx}>{beer.name}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default APITest;
