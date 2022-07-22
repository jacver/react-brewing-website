import React from "react";

function HomeBanner() {
  return (
    <div
      className="homeBannerContainer d-flex flex-column justify-content-center align-items-center p-5 bg-dark text-white fs-5"
      id="homeAbout"
    >
      <h2 className="vintage-font fs-1" style={{ color: "#59ff48" }}>
        ABOUT US
      </h2>
      <p className="w-80">
        We are proud to offer our homegrown products brewed in-house and a wide
        variety of beers & foods we import from around the world. We are always
        open to suggestions for growing our import menu!
      </p>
    </div>
  );
}

export default HomeBanner;
