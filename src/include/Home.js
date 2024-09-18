import React from 'react';
import Spotlight from '../include/Spotlight';
import New_Arrival from '../components/New_Arrival';
import Ad from '../components/Ad';
import Ad2 from '../components/Ad2';
import Mens from '../components/Mens';
import Brands from '../components/Brands';
import Feedback from '../components/Feedback';
import Women from '../components/Women';
import Limelight from '../components/Limelight';

function Home() {
  return (
    <div>
        <Spotlight/>
        <Ad/>
        <New_Arrival/>
        <Ad2/>
        <Mens/>
        <Women/>
        <Brands/>
        <Limelight/>
        <Feedback/>
    </div>
  )
}

export default Home