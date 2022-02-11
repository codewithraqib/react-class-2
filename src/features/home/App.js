import React from 'react';
import Header from '../common/Header';

export default function App({ children }) {
  const links = ['Home', 'About us', 'Contact us'];
  return (
    <div className="home-app">
      <Header logo={'/images/logo.jpeg'} links={links} abc={true} cde={1} />
      <div className="page-container">{children}</div>

      {/* <Footer/> */}
    </div>
  );
}
