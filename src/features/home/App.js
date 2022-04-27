import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import Header from '../common/Header';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links:null
    };

    this.setDataBack();

    
  }


  componentDidMount(){

    let cartItems = localStorage.getItem('cartItems');

    let cartItemsCount = 0;

    if (cartItems) {

      cartItemsCount = JSON.parse(cartItems).length;
    }

    let links = [
      {name: "Home", route:"/", icon:"", count:0},
      {name: "Wishlist", route:"wishlist", icon:"", count: 0},
      {name: "Cart", route:"cart", icon:"", count: cartItemsCount},
      
    ]

    this.setState({links : links })

  }

  setDataBack = () => {

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

  onLinkClick = (item) => {
    console.log("Link clicked!", item)

    this.props.history.push(item.route)


  }

  render() {

    console.log("State in app js", this.state)
    return (
      <div className="home-app">

        {this.state.links && <Header links={this.state.links} logo={"/images/logo.jpeg"} onLinkClick={this.onLinkClick} onLogoClick = {() => this.props.history.push("/")}/> }
        
        <div className="page-container">{this.props.children}</div>
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
