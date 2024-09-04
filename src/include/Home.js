import React from 'react';
import Navbar from '../include/Navbar'
import Spotlight from '../include/Spotlight';
import New_Arrival from '../components/New_Arrival';
import Ad from '../components/Ad';
import Ad2 from '../components/Ad2';
import Mens from '../components/Mens';
import Brands from '../components/Brands';
import Feedback from '../components/Feedback';
import Women from '../components/Women';
import Footer from '../components/Footer';
import Limelight from '../components/Limelight';

function Home() {
  return (
    <div>
        <Navbar />
        <Spotlight/>
        <Ad/>
        <New_Arrival/>
        <Ad2/>
        <Mens/>
        <Women/>
        <Brands/>
        <Limelight/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home