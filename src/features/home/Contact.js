import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import MyInput from '../common/MyInput';
import Button from '../common/Button';

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      marks: 0,
    };
  }

  // onChange = (type, value) => {
  //   console.log('testing type is----', type);
  //   console.log('testing value is----', value);

  //   switch (type) {
  //     case 'name':
  //       this.setState({ name: value });
  //       break;
  //     case 'class':
  //       this.setState({ class: value });
  //       break;
  //     case 'marks':
  //       this.setState({ marks: value });
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // onChange = (type, val) => {
  //   this.setState({type:val})
  // }

  onNameChange = val => {
    this.setState({ name: val, nameError: null });
  };

  onClassChange = val => {
    this.setState({ class: val, classError: null });
  };

  onMarksChange = val => {
    console.log('testing val rec is----', val);
    if (val < 0) return;
    this.setState({ marks: val, marksError: null });
  };

  onBlur = (type, val) => {
    console.log('type and value is-----', type, val);

    switch (type) {
      case 'name':
        if (val === '') {
          this.setState({ nameError: 'Please enter your name!' });
        }
        break;

      case 'class':
        if (val === '') {
          this.setState({ classError: 'Please enter your class name!' });
        }
        break;

      case 'marks':
        if (val == 0 || val === '') {
          this.setState({ marksError: 'Please enter your marks!' });
        }
        break;

      default:
        break;
    }
  };

  onSubmit = () => {
    let erroCount = 0;

    if (!this.state.name) {
      this.setState({ nameError: 'Please enter name!' });

      erroCount++;
      // return;
    }
    if (!this.state.class) {
      this.setState({ classError: 'Please enter class!' });
      // return;
      erroCount++;
    }
    if (!this.state.marks) {
      this.setState({ marksError: 'Please enter marks!' });
      // return;
      erroCount++;
    }

    if (erroCount > 0) {
      return;
    }
    alert('button  clicked');
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
            value={this.state.name}
            onBlur={val => this.onBlur('name', val)}
            error={this.state.nameError}
            // onChange={val => this.onChnage("name", val)}
          />
          <MyInput
            type="text"
            placeholder="enter your class"
            width={'100%'}
            label={'Class'}
            onChange={val => this.onClassChange(val)}
            // onChange={val => this.onChange("class",val)}
            value={this.state.class}
            onBlur={val => this.onBlur('class', val)}
            error={this.state.classError}
          />

          <MyInput
            type="number"
            placeholder="enter your marks"
            width={'100%'}
            label={'Number'}
            onChange={val => this.onMarksChange(val)}
            // onChange={val => this.onChange("class",val)}
            value={this.state.marks}
            onBlur={val => this.onBlur('marks', val)}
            error={this.state.marksError}
          />

          <Button name={'Add'} onClick={this.onSubmit} />
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
