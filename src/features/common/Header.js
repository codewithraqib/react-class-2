import React from 'react';

class Header extends React.PureComponent {
  // constructor(props){
  //     super(props)// it calls its parent class

  // }

  componentDidMount() {
    console.log('All properties inside Header are----', this.props.links);

    // this.getPersonDetails(person, abc, jhggh,1 , true)
  }

  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img className="logo-size" alt="logo" src={this.props.logo} />
        </div>
        <div className="links-container">
          <div className="links-container-inner">
            {this.props.links.map(link => {
              return <span className="link-item">{link}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
