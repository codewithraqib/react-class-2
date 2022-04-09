import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliders: [
        { img: '/images/slider/img1.jpg', msg: 'Message of slider 1' },
        { img: '/images/slider/img2.jpg', msg: 'Message of slider 2' },
        { img: '/images/slider/img3.jpg', msg: 'Message of slider 3' },
        { img: '/images/slider/img4.jpg', msg: 'Message of slider 4' },
        { img: '/images/slider/img2.jpg', msg: 'Message of slider 5' },
      ],

      latestItems: [
        { img: '/images/slider/img1.jpg', name: 'Item 1' },
        { img: '/images/slider/img2.jpg', name: 'Item 2' },
        { img: '/images/slider/img3.jpg', name: 'Item 3' },
        { img: '/images/slider/img4.jpg', name: 'Item 4' },
        { img: '/images/slider/img2.jpg', name: 'Item 5' },
      ],
    };
  }
  componentDidMount() {}

  renderLatestItem = (item, index) => {
    return (
      <div key={index} className="latest-item">
        <img src={item.img} alt="" />
        <div>
          <span>{item.name}</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="home-welcome-page">
        <Carousel showThumbs={false} showIndicators={true}>
          {this.state.sliders &&
            this.state.sliders.map(slide => {
              return (
                <div>
                  <img src={slide.img} alt={slide.msg} />
                  {/* <p className="legend">{slide.msg}</p> */}
                </div>
              );
            })}
        </Carousel>

        <section className="latest-items-section">
          <div className="latest-items-container">
            <div className="all-latest-items">
              {this.state.latestItems.map((item, index) => this.renderLatestItem(item, index))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomePage;
