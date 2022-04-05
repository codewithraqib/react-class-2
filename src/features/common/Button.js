import React from 'react';

class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let props = this.props;
    return (
      <div className="button-container">
        <div onClick={props.onClick} className="button-container-inner">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default Button;
