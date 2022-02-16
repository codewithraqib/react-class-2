import React from 'react';

class HeroSection extends React.PureComponent {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-image-container">
          <img src={this.props.backImage} alt="back" />
        </div>

        <div className="hero-overlay-section">
          <div className="inner-content">
            <span>I love React</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
