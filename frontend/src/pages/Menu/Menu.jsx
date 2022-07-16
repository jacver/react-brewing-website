// frontend/src/pages/Menu/Menu.jsx

import React from "react";

// Footer/Nav Imports
import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/Footer";

// Page specific imports
import BeerList from "../../components/MenuComponents/BeerList";
import FoodList from "../../components/MenuComponents/FoodList";

function Menu() {
  return (
    <>
      <TopNav />
      <section className="bg-dark text-white">
        <BeerList />
        <FoodList />
      </section>
      <Footer />
    </>
  );
}

export default Menu;
