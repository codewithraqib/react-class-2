import React from 'react';

class ServiceCard extends React.PureComponent {
  render() {
    return (
      <div className="card">
        <div>{this.props.service && this.props.service.icon && this.props.service.icon}</div>
        <div>{this.props.service.name}</div>
        <div>{this.props.service.desc}</div>
      </div>
    );
  }
}

export default ServiceCard;
