import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class Wishlist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('All props in cart page are----', this.props.home);

    this.setState({ wishlistItems: this.props.home.wishlistItems ? this.props.home.wishlistItems : null });
  }

  addProductToCart = (item) => {
    // let cartItems = [];

    let itemFound = false;

    let oldCartItems = [];

    if (this.props.home.cartItems && this.props.home.cartItems.length > 0) {
      oldCartItems = [...this.props.home.cartItems];
    }

    oldCartItems.forEach(item => {
      if (item.id === item.id) {
        itemFound = true;
      }
    });

    if (!itemFound) {
      //we add new item now to old items to make a new array of items
      oldCartItems.push(item);
    }

    this.props.actions.setCartItem(oldCartItems);

    console.log('old cart items are----', oldCartItems);

    localStorage.setItem('cartItems', JSON.stringify(oldCartItems));

    setTimeout(() => {
      this.props.history.push('/cart');
    }, 500);
  };

  renderWishlistItem = item => {
    return (
      <div className="cart-item">
        <div className="img-container">
          <img src={item.image} alt="" />
        </div>
        <div className="row-1">
          <div className="cart-item-title">
            <span>{item.title}</span>
          </div>
          <div className="row-1-internal">
            <div className="price">
              <span>{'Price: ' + item.price}</span>
            </div>
            <div className="qty">
              <span>{'Qty: 1'}</span>
            </div>
          </div>

          <div className='buttons-container'>
            <div className='button checkout' onClick={() => this.addProductToCart(item)}>
              <span>Move to cart</span>
            </div>
          </div>

          
        </div>
      </div>
    );
  };

  goToAddressPage = () => {
    this.props.history.push('/addresses');
  };

  render() {
    return (
      <div className="content-wrapper cart-items-container">
        <div className="items-container">
          {this.state.wishlistItems &&
            this.state.wishlistItems.map(item => {
              return this.renderWishlistItem(item);
            })}
        </div>

      </div>
    );
  }
}

// export default Cart;

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

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
