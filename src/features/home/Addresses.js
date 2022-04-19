import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import MyInput from '../common/MyInput';

class Addresses extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    console.log('props in product page are---', this.props);
  }

  componentDidMount() {}

  onChange = (type, text) => {
    switch (type) {
      case 'name':
        this.setState({ name: text, nameError: null });
        break;
      case 'address':
        this.setState({ address: text, addressError: null });
        break;
      case 'house_number':
        this.setState({ houseNumber: text, houseNumberError: null });
        break;

      case 'state':
        this.setState({ state: text, stateError: null });
        break;

      default:
        break;
    }
  };

  onBlur = (type, text) => {
    if (!text) {
      switch (type) {
        case 'name':
          this.setState({ nameError: 'Please enter name!' });
          break;
        case 'address':
          this.setState({ addressError: 'Please enter your address!' });
          break;
        case 'house_number':
          this.setState({ houseNumberError: 'Please enter your House Number!' });
          break;
        case 'state':
          this.setState({ stateError: 'Please enter your State!' });
          break;

        default:
          break;
      }
    }
  };

  goToPaymentPage = () => {
    this.props.history.push('/payment');
  };

  render() {
    return (
      <div className="address-container content-wrapper">
        <div className="address-form">
          <MyInput
            placeholder={'Name'}
            onChange={text => this.onChange('name', text)}
            onBlur={text => this.onBlur('name', text)}
            error={this.state.nameError}
          />
          <MyInput
            placeholder={'Address'}
            onChange={text => this.onChange('address', text)}
            onBlur={text => this.onBlur('address', text)}
            error={this.state.addressError}
          />

          <MyInput
            placeholder={'House number'}
            onChange={text => this.onChange('house_number', text)}
            onBlur={text => this.onBlur('house_number', text)}
            error={this.state.houseNumberError}
          />

          <MyInput
            placeholder={'State'}
            onChange={text => this.onChange('state', text)}
            onBlur={text => this.onBlur('state', text)}
            error={this.state.stateError}
          />
        </div>

        <div className="buttons-container">
          <div className="button checkout" onClick={this.goToPaymentPage}>
            <span>Proceed to Checkout </span>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
