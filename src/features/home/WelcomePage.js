import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import AboutUs from './AboutUs';

export default function WelcomePage() {
  const spans = ['Home', 'About us', 'Contact us'];
  return (
    <div className="home-welcome-page">
      <HeroSection backImage="images/hero-back.jpg"/>
      <AboutUs/>
    </div>
  );
}
