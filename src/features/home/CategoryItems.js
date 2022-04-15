import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class CategoryItems extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    console.log('Props in categoryItems page are -----', this.props.match.params.items);

    this.setState({ category: this.props.match.params.items });

    setTimeout(() => {
      this.getProductList();
    }, 1000);
  }

  getProductList = () => {
    this.props.actions.apiCall({
      url: `https://fakestoreapi.com/products/category/${this.props.match.params.items}`,
      method: 'GET',
      callback: res => {
        console.log('response from api is ===', res);

        if (res && res.data && res.data.length > 0) {
          this.setState({
            items: res.data,
          });
        }
      },
    });
  };

  setProduct = item => {
    this.props.actions.setProductInFocus(item);
    localStorage.setItem('productInFocus', JSON.stringify(item));

    setTimeout(() => {
      this.props.history.push('/product');
    }, 500);
  };

  renderLatestItem = (item, index) => {
    console.log('Item received is----', item);

    return (
      <div key={index} className="latest-item" onClick={() => this.setProduct(item)}>
        <div className="img-container">
          <img src={item.image} alt="" />
        </div>
        <div className="product-name">
          <span>{item.title.substr(0, 30) + '...'}</span>
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
        <section className="latest-items-section">
          <div className="latest-items-container content-wrapper">
            <div className="title">Latest Products</div>
            <div className="all-latest-items ">
              {this.state.items &&
                this.state.items.map((item, index) => this.renderLatestItem(item, index))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// export default CategoryItems;

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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);
