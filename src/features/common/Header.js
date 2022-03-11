import React from 'react';

class Header extends React.PureComponent {
  componentDidMount() {
    let links = this.props.links;

    console.log('Links are--', links);

    // let sortedLinks = links.sort((a, b) => b.name - a.name);

    // console.log('Sorted Links are----', sortedLinks);
  }

  render() {
    // console.log(
    //   'All properties inside Header are----',
    //   this.props.links.sort((a, b) => {
    //     return b.name - a.name;
    //   }),
    // );
    return (
      <div className="header-container">
        <div className="logo-container" onClick={this.props.onLogoClick}>
          <img className="logo-size" alt="logo" src={this.props.logo} />
        </div>
        <div className="links-container">
          <div className="links-container-inner">
            {this.props.links.map(link => {
              return (
                <span
                  style={link.active ? { backgroundColor: 'black' } : {}}
                  onClick={() => this.props.onLinkClick(link.name)}
                  className="link-item"
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
