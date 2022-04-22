import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import MyInput from '../common/MyInput';
import { NavItem } from 'react-bootstrap';

class Payment extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      paymentMethods: [
        { name: 'Credit Card', id: 0 },
        { name: 'Debit Card', id: 1 },
        { name: 'UPI', id: 2 },
        // { name: 'Internet Banking', id: 3 },
      ],
    };

    console.log('props in product page are---', this.props);
  }

  componentDidMount() {}

  onChange = (type, text) => {
    switch (type) {
      case 'name':
        this.setState({ name: text, nameError: null });
        break;
      case 'expiry':
        this.setState({ expiryDate: text, expiryDateError: null });
        break;
      case 'cvv':
        this.setState({ cvv: text, cvvError: null });
        break;

      case 'card_number':
        this.setState({ cardNumber: text, cardNumberError: null });
        break;

      case 'upi_id':
        this.setState({ upiId: text, upiIdError: null });
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

  placeOrder = () => {
    let errors = 0;

    if (this.state.paymentMethodToShow === 0 || this.state.paymentMethodToShow === 1) {
      if (!this.state.name) {
        this.setState({ nameError: 'enter your name' });
        errors++;
      }
      if (!this.state.expiryDate) {
        this.setState({ expiryDateError: 'enter your expiry date' });
        errors++;
      }
      if (!this.state.cvv) {
        this.setState({ cvvError: 'enter your cvv' });
        errors++;
      }
      if (!this.state.cardNumber) {
        this.setState({ cardNumberError: 'enter your card number' });
        errors++;
      }
    } else if (this.state.paymentMethodToShow === 2) {
      if (!this.state.upiId) {
        this.setState({ upiIdError: 'enter your UPI Id' });
        errors++;
      }
    } else {
      errors++;
      alert('Choose payment method');
    }
    if (errors === 0) {
      alert('Order placed');
    }

    // alert('Order placed');
  };

  getCreditCardForm = () => {
    return (
      <div className="address-form">
        <div className="sub-title">Credit Card</div>
        <MyInput
          placeholder={'Name'}
          type={'text'}
          onChange={text => this.onChange('name', text)}
          onBlur={text => this.onBlur('name', text)}
          error={this.state.nameError}
        />

        <div className="two-inputs">
          <MyInput
            placeholder={'Expiry Date'}
            type={'number'}
            width={'48%'}
            onChange={text => this.onChange('expiry', text)}
            onBlur={text => this.onBlur('expiry', text)}
            error={this.state.expiryError}
          />

          <MyInput
            placeholder={'CVV'}
            type={'number'}
            width={'48%'}
            onChange={text => this.onChange('cvv', text)}
            onBlur={text => this.onBlur('cvv', text)}
            error={this.state.cvvError}
          />
        </div>

        <MyInput
          type={'number'}
          placeholder={'Card Number'}
          onChange={text => this.onChange('card_number', text)}
          onBlur={text => this.onBlur('card_number', text)}
          error={this.state.cardNumberError}
        />
      </div>
    );
  };

  getDebitCardForm = () => {
    return (
      <div className="address-form">
        <div className="sub-title">Debit Card</div>
        <MyInput
          placeholder={'Name'}
          type={'text'}
          onChange={text => this.onChange('name', text)}
          onBlur={text => this.onBlur('name', text)}
          error={this.state.nameError}
        />

        <div className="two-inputs">
          <MyInput
            placeholder={'Expiry Date'}
            type={'number'}
            width={'48%'}
            onChange={text => this.onChange('expiry', text)}
            onBlur={text => this.onBlur('expiry', text)}
            error={this.state.expiryError}
          />

          <MyInput
            placeholder={'CVV'}
            type={'number'}
            width={'48%'}
            onChange={text => this.onChange('cvv', text)}
            onBlur={text => this.onBlur('cvv', text)}
            error={this.state.cvvError}
          />
        </div>

        <MyInput
          type={'number'}
          placeholder={'Card Number'}
          onChange={text => this.onChange('card_number', text)}
          onBlur={text => this.onBlur('card_number', text)}
          error={this.state.cardNumberError}
        />
      </div>
    );
  };

  getUPIForm = () => {
    return (
      <div className="address-form">
        <div className="sub-title">UPI FORM</div>
        <MyInput
          type={'text'}
          placeholder={'UPI ID'}
          onChange={text => this.onChange('upi_id', text)}
          onBlur={text => this.onBlur('upi_id', text)}
          error={this.state.upiIdError}
        />
      </div>
    );
  };

  showPaymentMethod = index => {
    console.log('item clicked is----', index);

    this.setState({ paymentMethodToShow: index });
  };

  getPaymentMethods = () => {
    return this.state.paymentMethods.map((val, index) => {
      return (
        <div key={index} className="payment-item" onClick={() => this.showPaymentMethod(index)}>
          {val.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="address-container content-wrapper">
        <div className="payment-methods">{this.getPaymentMethods()}</div>

        {this.state.paymentMethodToShow === 0
          ? this.getCreditCardForm()
          : this.state.paymentMethodToShow === 1
          ? this.getDebitCardForm()
          : this.state.paymentMethodToShow === 2
          ? this.getUPIForm()
          : null}

        {/* {this.getCreditCardForm()}
        {this.getCreditCardForm()} */}

        <div className="buttons-container">
          <div className="button checkout" onClick={this.placeOrder}>
            <span>Place Order </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
