import React from "react";
import "../App.css";
import Vehicles from "../components/Vehicles/Vehicles";
import Services from "../components/Services/Services";
import HeroSection from "../components/HeroSection/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Vehicles />
      <Services />
    </>
  );
}

export default Home;
