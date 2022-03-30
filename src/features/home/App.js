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
    };

    this.retreiveDataFromLocalStorage();
  }

  retreiveDataFromLocalStorage = () => {
    let allBlogs = localStorage.getItem('allBlogs');

    if (allBlogs) {
      setTimeout(() => {
        this.props.actions.storeBlogs(JSON.parse(allBlogs));
      }, 2000);
    }

    let blogInFocus = localStorage.getItem('blogInFocus');

    if (blogInFocus) {
      this.props.actions.setBlogInFocus(JSON.parse(blogInFocus));
    }

    let menu = localStorage.getItem('menu');

    if (menu) {
      // setTimeout(() => {
      this.setState({ links: JSON.parse(menu) });
      // }, 1000);
    }
  };

  componentDidMount() {
    console.log('Props in App.js are-----', this.props.home);

    localStorage.setItem('props', JSON.stringify(this.props.home));
    this.retreiveDataFromLocalStorage();
  }

  onNavItemClick = navItem => {
    console.log('Nav item clicked is newwwwww----', navItem);

    let newLinks = [];

    this.state.links.map(val => {
      if (val.name === navItem.name) {
        newLinks.push({ ...val, active: true });
      } else {
        newLinks.push({ ...val, active: false });
      }
    });

    this.setState({ links: newLinks });

    localStorage.setItem('menu', JSON.stringify(newLinks));

    this.props.history.push(navItem.link);
  };

  onLogoClick = () => {
    this.props.history.push('/');

    this.onNavItemClick(this.state.links[0]);
  };

  render() {
    return (
      <div className="home-app">
        <Header
          logo={'/images/logo.jpeg'}
          links={this.state.links}
          onLinkClick={this.onNavItemClick}
          onLogoClick={() => this.onLogoClick()}
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
