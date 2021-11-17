import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import Cards from "../../components/cardAdotaPet/CardsAdota";
import CadastroPet from "../../components/cadastroPet/cadastroPet";

function Adotar() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <CadastroPet />
      <Footer />
    </div>
  );
}

export default Adotar;
