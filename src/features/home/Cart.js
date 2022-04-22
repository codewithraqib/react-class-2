import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class Cart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('All props in cart page are----', this.props.home);

    this.setState({ cartItems: this.props.home.cartItems ? this.props.home.cartItems : null });
  }

  renderCartItem = item => {
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
          {this.state.cartItems &&
            this.state.cartItems.map(item => {
              return this.renderCartItem(item);
            })}
        </div>

        <div className="buttons-container">
          <div className="button checkout" onClick={this.goToAddressPage}>
            <span>Proceed to Checkout </span>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
