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

  render() {
    let item = this.state.item;
    console.log('State is---', this.state);
    return item ? (
      <div>
        <div className="item">
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
