import React from 'react';

class FooterSection extends React.PureComponent{
  render() {

    return(
        <div className='section-padding'>
            <div  className='items-center'>

              <img className='logo-size' src='./images/logo.png' alt='logo'></img>
            </div>

            <div className='mt10 items-center'>
              <span className='bold-text'>Follow Us</span>
            </div>


            <div className='mt10 items-center'>
              <img className='logo-size' src='./images/fb.png' alt='img'></img>
              <img className='logo-size' src='./images/insta.png' alt='img'></img>
            </div>

            <div className='mt20 items-center'>
              <span>Copyright ©2022 All rights reserved | This website is made with  by <span className='red-text'>Bracecodes Software Solutions Pvt. Ltd.</span></span>
            </div>


        </div>
    )
  }
}

export default FooterSection;
