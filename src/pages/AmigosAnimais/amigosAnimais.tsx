import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import AmigoPet from "../../components/amigoPet/amigoPet"

function RgPet() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <AmigoPet />
      <Footer />
    </div>
  );
}

export default RgPet;
