import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import MyInput from '../common/MyInput';

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //   onChange = (type, value) => {
  //     console.log('testing type is----', type);
  //     console.log('testing value is----', value);

  //     switch (type) {
  //       case 'name':
  //         this.setState({ name: value });
  //         break;
  //       case 'class':
  //         this.setState({ class: value });
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  onNameChange = val => {
    this.setState({ name: val });
  };

  onClassChange = val => {
    this.setState({ class: val });
  };

  render() {
    console.log('testing state in contact page is------', this.state);
    return (
      <div className="content-wrapper">
        <form>
          <MyInput
            type="text"
            placeholder="enter your name"
            width={'100%'}
            label={'Name'}
            onChange={val => this.onNameChange(val)}
            // onChange={val => this.onChnage("name", val)}
          />
          <MyInput
            type="text"
            placeholder="enter your class"
            width={'100%'}
            label={'Class'}
            onChange={val => this.onClassChange(val)}
            // onChange={val => this.onChange("class",val)}
          />
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
