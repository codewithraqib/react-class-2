import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class Shop extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.getProductList();
  }

  getProductList = () => {
    this.props.actions.apiCall({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
      callback: res => {
        console.log('response from api is ===', res);

        if (res && res.data && res.data.length > 0) {
          this.setState({
            products: res.data,
          });
        }
      },
    });
  };

  renderItem = (item, index) => {
    return (
      <div key={index} className="item">
        <div className="img-container">
          <img src={item.image} alt="" />
        </div>
        <div className="product-name">
          <span>{item.title.substr(0, 50) + '...'}</span>
        </div>

        <div className="product-price">
          <span>{'Price: ' + item.price}</span>
          <span>{'Rating: ' + item.rating.rate + ` (${item.rating.count})`}</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <section className="shop-section">
          <div className="shop-container content-wrapper">
            <div className="title">All Products</div>
            <div className="all-items ">
              {this.state.products &&
                this.state.products.map((item, index) => this.renderItem(item, index))}
            </div>
          </div>
        </section>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
