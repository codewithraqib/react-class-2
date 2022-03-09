import React from 'react';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Icon from '@mui/material/Icon';
import { FaDesktop, FaMobile, FaBook, FaChartBar, FaIceCream } from 'react-icons/fa';

class ProjectCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showExtendedCard: false,
    };
  }

  getIcon = icon => {
    switch (icon) {
      case 'computer':
        return <FaDesktop size={30} color={'white'} />;
      case 'mobile':
        return <FaMobile size={30} color={'white'} />;
      case 'book':
        return <FaBook size={30} color={'white'} />;
      case 'chart':
        return <FaChartBar size={30} color={'white'} />;
      default:
        return <FaIceCream size={30} color={'white'} />;
    }
  };

  cardClicked = () => {
    // if (this.state.showExtendedCard === true) {
    //   this.setState({ showExtendedCard: false });
    // } else {
    //   this.setState({ showExtendedCard: true });
    // }
    this.setState({ showExtendedCard: !this.state.showExtendedCard });
  };

  render() {
    return (
      <div onClick={this.props.clickable && this.cardClicked} className="card project-card">
        <div className="project-card-inner">
          <div className="name-description">
            <div className="sub-title">
              <span className="bold-text">{this.props.project.name}</span>
            </div>
            <div className="general-text">
              <span>{this.props.project.desc}</span>
            </div>
          </div>
          <div className="brand">
            <div className="inner">
              <span>{this.props.project.name}</span>
            </div>
          </div>
        </div>

        {this.state.showExtendedCard && (
          <div className="extended-card">
            <span>
              {' '}
              {this.props.project && this.props.project.additionalData
                ? this.props.project.additionalData
                : 'no data'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectCard;
