import React from 'react';
import Header from '../common/Header';

// const links = [
//   { name: 'Home', active: true },
//   { name: 'About us', active: false },
//   { name: 'Contact us', active: false },
// ];

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { name: 'Home', active: true },
        { name: 'About us', active: false },
        { name: 'Contact us', active: false },
      ],

      abc: true,
      cde: 1,
    };
  }

  onNavItemClick = navItem => {
    console.log('Nav item clicked is newwwwww----', navItem);

    let newLinks = [];

    this.state.links.map(val => {
      if (val.name === navItem) {
        newLinks.push({ name: val.name, active: true });
      } else {
        newLinks.push({ name: val.name, active: false });
      }
    });

    this.setState({ links: newLinks });
  };

  render() {
    return (
      <div className="home-app">
        <Header
          logo={'/images/logo.jpeg'}
          links={this.state.links}
          onLinkClick={this.onNavItemClick}
        />
        <div className="page-container">{this.props.children}</div>

        {/* <div>I am footer</div> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
