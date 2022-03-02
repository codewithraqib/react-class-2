import React from 'react';
import { FaFacebook , FaInstagram , FaHeart } from 'react-icons/fa';


class FooterSection extends React.PureComponent{
  render() {

    return (
      <div className="section-padding ">
        <div className="items-center">
          <img className="logo-size" src="./images/logo.png" alt="logo"></img>
        </div>

        <div className="mt10 items-center">
          <span className="bold-text">Follow Us</span>
        </div>

        <div className="social-links mt10 items-center">
          <FaFacebook size={45} color="blue" />
          <FaInstagram size={45} color="grey" />
        </div>

        <div className="mt20 items-center">
          <span>
            Copyright ©2022 All rights reserved | This website is made with <FaHeart color='red'/> by{' '}
            <span className="red-text">Bracecodes Software Solutions Pvt. Ltd.</span>
          </span>
        </div>
      </div>
    );
  }
}

export default FooterSection;
