import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';

export default function WelcomePage() {
  const spans = ['Home', 'About us', 'Contact us'];
  return (
    <div className="home-welcome-page">
      <Header links={spans} />
    </div>
  );
}
