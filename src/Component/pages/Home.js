import React from 'react';
import '../../App.css';
import Vehicles from './Vehicles';
import Services from './Services';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
      <HeroSection />
      <Vehicles />
      <Services/>
    </>
  );
}

export default Home;
