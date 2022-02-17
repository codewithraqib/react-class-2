import React from 'react';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Icon from '@mui/material/Icon';
import { FaTwitter, FaDesktop, FaMobile, FaBook, FaChartBar, FaIceCream } from 'react-icons/fa';

class MemberCard extends React.PureComponent {
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

  render() {
    return (
      <div className="card member-card">
        <img src="images/member.jpg" alt="member" />
        {/* <AccessAlarm /> */}

        <div className="overlay">
          <div className="icon">
            {this.props.service && this.props.service.icon && this.getIcon(this.props.service.icon)}
          </div>
          <div className="service">
            <span className="sub-title">{this.props.service.name}</span>
          </div>
          <div className="desc">
            <span>{this.props.service.desc}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
