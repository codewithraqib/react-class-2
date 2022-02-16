import React from 'react';
import ServiceCard from '../common/ServiceCard';

class MainStructureComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    let props = this.props;
    return (
      <div className="main-content-parent">
        <div className="about-us-container ">
          {props.image ? (
            <div className="image-container">
              <img src={props.image} alt="text" />
            </div>
          ) : null}

          <div className="desc-container">
            <div>
              <div>
                <span className="title">{props.title ? props.title : ''}</span>
              </div>
              <div className="dot-line-container">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
            </div>
            <span>{props.description ? props.description : ''}</span>
          </div>
        </div>

        {props.services ? (
          <div className="service-cards-container">
            {props.services.map(service => {
              return <ServiceCard service={service} />;
            })}
          </div>
        ) : null}

        {props.members ? (
          <div className="service-cards-container">
            {props.members.map(member => {
              return <ServiceCard service={member} />;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default MainStructureComponent;