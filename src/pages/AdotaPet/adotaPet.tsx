import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import Cards from "../../components/cardAdotaPet/CardsAdota";


function Adotar() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <Cards />
      <Footer />
    </div>
  );
}

export default Adotar;
