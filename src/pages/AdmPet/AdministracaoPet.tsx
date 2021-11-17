import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import CardDelete from "../../components/cardDelete/Cards";

function Adotar() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <CardDelete />
      <Footer />
    </div>
  );
}

export default Adotar;
