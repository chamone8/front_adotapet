import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/sidebar";
import Cards from "../../components/card/Cards";


import "./home.css";

function Home() {
  return (
    <div className="App">

      <NavBar />
      <SideBar />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
