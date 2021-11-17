import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import RgPets from "../../components/rgPet/rgPet"

function RgPet() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <RgPets />
      <Footer />
    </div>
  );
}

export default RgPet;
