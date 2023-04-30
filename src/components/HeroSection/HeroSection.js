import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h2>Decentralized Vehicle Information Storage System</h2>
      <p>We got what you need. A trusted platform to get your vehicle Information</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create Account
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
