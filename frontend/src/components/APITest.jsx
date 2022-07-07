import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function APITest() {
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
    <div>
      <h1>API test</h1>
      <ul>
        {!beers
          ? () => {
              return (
                // if beers hasn't been initialized, render loading spinner - role attrib and span necessary for accessibility
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              );
            }
          : beers.map((beer, idx) => {
              return <li key={idx}>{beer.name}</li>;
            })}
      </ul>
    </div>
  );
}

export default APITest;
