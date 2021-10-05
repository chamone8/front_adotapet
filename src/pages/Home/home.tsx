import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import SideBar from '../../components/sidebar/sidebar'

import './home.css';

function Home() {
  return (
    <div className="App">
        {/* <NavBar /> */}
        <SideBar />

        <Footer />
    </div>
  );
}

export default Home;