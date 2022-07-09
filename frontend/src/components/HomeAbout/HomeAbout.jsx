import React from "react";

function HomeAbout() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.toptal.com/designers/subtlepatterns/uploads/cartographer.png)",
      }}
      className="homeAboutContainer d-flex flex-column justify-content-center align-items-center p-5 bg-dark text-white"
    >
      <h2 className="text-warning">ABOUT US</h2>
      <p className="w-80">
        We are proud to offer our homegrown products brewed in-house and a wide
        variety of beers & foods we import from around the world. We are always
        open to suggestions for growing our import menu!
      </p>
    </div>
  );
}

export default HomeAbout;
