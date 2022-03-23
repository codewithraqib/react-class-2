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
        { name: 'Home', active: true, link: '/' },
        { name: 'About us', active: false, link: '/about-us' },
        { name: 'Contact us', active: false, link: '/contact-us' },
        { name: 'Blogs', active: false, link: '/blogs' },
      ],

      abc: true,
      cde: 1,
    };

    this.retreiveDataFromLocalStorage();
  }

  retreiveDataFromLocalStorage = () => {
    let allBlogs = localStorage.getItem('allBlogs');

    if (allBlogs) {
      this.props.actions.storeBlogs(JSON.parse(allBlogs));
    }

    let blogInFocus = localStorage.getItem('blogInFocus');

    if (blogInFocus) {
      this.props.actions.setBlogInFocus(JSON.parse(blogInFocus));
    }
  };

  componentDidMount() {
    console.log('Props in App.js are-----', this.props.home);

    localStorage.setItem('props', JSON.stringify(this.props.home));
  }

  onNavItemClick = navItem => {
    console.log('Nav item clicked is newwwwww----', navItem);

    let newLinks = [];

    this.state.links.map(val => {
      if (val.name === navItem.name) {
        newLinks.push({ name: val.name, active: true });
      } else {
        newLinks.push({ name: val.name, active: false });
      }
    });

    this.setState({ links: newLinks });

    this.props.history.push(navItem.link);
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
