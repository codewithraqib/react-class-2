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
  }

  render() {
    return <div> I am cart page </div>;
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
