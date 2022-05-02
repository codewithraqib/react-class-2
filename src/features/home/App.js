import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import Header from '../common/Header';
import FooterSection from '../common/FooterSection';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: null,
    };

    this.setDataBack();
  }

  componentDidMount() {
    this.setMenu();
  }

  setMenu = () => {
    let cartItems = localStorage.getItem('cartItems');

    let cartItemsCount = 0;

    if (cartItems) {
      cartItemsCount = JSON.parse(cartItems).length;
    }

    let wishlistItems = localStorage.getItem('wishlistItems');

    let wishlistItemsCount = 0;

    if (wishlistItems) {
      wishlistItemsCount = JSON.parse(wishlistItems).length;
    }

    let links = [
      { name: 'Home', route: '/', icon: '', count: 0 },
      { name: 'Wishlist', route: 'wishlist', icon: '', count: wishlistItemsCount },
      { name: 'Cart', route: 'cart', icon: '', count: cartItemsCount },
    ];

    this.setState({ links: links });
  };

  componentDidUpdate(prevProps) {
    // console.log('State in component did update is---', prevProps);
    // if (
    //   prevProps.home &&
    //   prevProps.home.wishlistItems &&
    //   prevProps.home.wishlistItems.length === this.props.home &&
    //   this.props.home.wishlistItems &&
    //   this.props.home.wishlistItems.length
    // ) {
    //   this.setMenu();
    // }
  }

  setDataBack = () => {
    let wishlistItems = localStorage.getItem('wishlistItems');

    if (wishlistItems) {
      this.props.actions.setWishlistItem(JSON.parse(wishlistItems));
    }

    let cartItems = localStorage.getItem('cartItems');

    if (cartItems) {
      this.props.actions.setCartItem(JSON.parse(cartItems));
    }

    let productInFocus = localStorage.getItem('productInFocus');
    console.log('prod in foc is----', productInFocus);

    if (productInFocus) {
      this.props.actions.setProductInFocus(JSON.parse(productInFocus));
    }
  };

  onLinkClick = item => {
    console.log('Link clicked!', item);

    this.props.history.push(item.route);
  };

  render() {
    console.log('State in app js', this.state);
    return (
      <div className="home-app">
        {this.state.links && (
          <Header
            links={this.state.links}
            logo={'/images/logo.jpeg'}
            onLinkClick={this.onLinkClick}
            onLogoClick={() => this.props.history.push('/')}
          />
        )}

        <div className="page-container">{this.props.children}</div>

        <FooterSection />
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
