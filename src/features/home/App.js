import React from 'react';
import Header from '../common/Header';
import Footer from '../common/FooterSection';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';

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

    this.retreiveData();
  }

  retreiveData = () => {
    let allBlogs = JSON.parse(localStorage.getItem('allBlogs'));
    console.log('data from localstorage is----', allBlogs);

    this.props.actions.storeBlogs(allBlogs);
  };

  componentDidMount() {
    console.log('Props in App.js are-----', this.props.home);

    localStorage.setItem('props', JSON.stringify(this.props.home));
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
          onLogoClick={() => this.props.history.push('/')}
        />
        <div className="page-container">{this.props.children}</div>

        {/* <div>I am footer</div> */}
        <Footer />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, ...commonActoins }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
