import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class Product extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    console.log('props in product page are---', this.props);
  }

  componentDidMount() {
    if (this.props.home && this.props.home.productInFocus) {
      this.setState({
        item: this.props.home.productInFocus,
      });
    }
  }

  addProductToCart = () => {
    // let cartItems = [];

    let itemFound = false;

    let oldCartItems = [];

    if (this.props.home.cartItems && this.props.home.cartItems.length > 0) {
      oldCartItems = [...this.props.home.cartItems];
    }

    oldCartItems.forEach(item => {
      if (item.id === this.state.item.id) {
        itemFound = true;
      }
    });

    if (!itemFound) {
      //we add new item now to old items to make a new array of items
      oldCartItems.push(this.state.item);
    }

    this.props.actions.setCartItem(oldCartItems);

    console.log('old cart items are----', oldCartItems);

    localStorage.setItem('cartItems', JSON.stringify(oldCartItems));

    setTimeout(() => {
      this.props.history.push('/cart');
    }, 500);
  };

  render() {
    let item = this.state.item;
    console.log('State is---', this.state);
    return item ? (
      <div className="item-container">
        <div className="item">
          <div className="img-container">
            <img src={item.image} alt="" />
          </div>
        </div>

        <div className="item-details">
          <div className="product-name">
            <span>{item.title}</span>
          </div>

          <div className="product-desc">
            <span>{item.description}</span>
          </div>

          <div className="product-price">
            <span>{'Price: ' + item.price}</span>
            <span>{'Rating: ' + item.rating.rate + ` (${item.rating.count})`}</span>
          </div>

          <div className="buttons">
            <div className="add-to-cart button" onClick={this.addProductToCart}>
              <span>Add To Cart</span>
            </div>

            <div className="add-to-wishlist button">
              <span>Add To Wishlist</span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>no item</div>
    );
  }
}

// export default Shop;

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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
