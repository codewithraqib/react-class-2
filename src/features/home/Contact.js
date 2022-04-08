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

  onChange = (type, value) => {
    console.log('testing type is----', type);
    console.log('testing value is----', value);

    switch (type) {
      case 'name':
        this.setState({ name: value, nameError: null });
        break;
      case 'class':
        this.setState({ class: value, classError: null });
        break;
      case 'marks':
        this.setState({ marks: value, marksError: null });
        break;

      case 'profession':
        this.setState({ profession: value, professionError: null });
        break;

      default:
        break;
    }
  };

  // onChange = (type, val) => {
  //   this.setState({ type: val });
  // };

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

  onProfessionChange = val => {
    this.setState({ profession: val, professionError: null });
  };

  onBlur = (type, val) => {
    console.log('type and value is-----', type, val);

    switch (type) {
      case 'name':
        if (val === '') {
          this.setState({ nameError: 'Please enter your name on blur!' });
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

      case 'profession':
        if (val === '') {
          this.setState({ professionError: 'Enter your profession' });
        }
        break;

      default:
        break;
    }
  };

  onSubmit = () => {
    let erroCount = 0;

    if (!this.state.name || this.state.name === '') {
      this.setState({ nameError: 'Please enter name!' });
      erroCount++;
    }
    if (!this.state.class || this.state.class === '') {
      this.setState({ classError: 'Please enter your class!' });
      erroCount++;
    }
    if (!this.state.marks) {
      this.setState({ marksError: 'Please enter your marks!' });
      erroCount++;
    }

    if (!this.state.profession || this.state.profession === '') {
      this.setState({ professionError: 'Please enter your profession!' });
      erroCount++;
    }

    console.log('Error count is----', erroCount);
    if (erroCount !== 0) {
      return;
    }

    let myData = {
      // id: 1,
      title: this.state.name,
      body: this.state.class,
      userId: this.state.marks,
    };

    // this.props.actions.apiCall({
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    //   method: 'POST',
    //   data: myData,
    //   callback: res => {
    //     console.log('testing data received after submitting frm-----', res);

    //     if (res && (res.status === 200 || res.status === 201)) {
    //       alert('Form Submitted');
    //     } else {
    //       alert('Form Not submitted');
    //     }
    //   },
    // });

    // this.props.actions.apiCall({
    //   url: 'https://jsonplaceholder.typicode.com/posts/100',
    //   method: 'PUT',
    //   data: myData,
    //   callback: res => {
    //     console.log('testing data received after submitting frm-----', res);

    //     if (res && (res.status === 200 || res.status === 201)) {
    //       alert('Form Updated');
    //     } else {
    //       alert('Form Not Updated');
    //     }
    //   },
    // });

    this.props.actions.apiCall({
      url: 'https://jsonplaceholder.typicode.com/posts/75',
      method: 'DELETE',
      callback: res => {
        console.log('testing data received after submitting frm-----', res);

        if (res && (res.status === 200 || res.status === 201)) {
          alert('Post Deleted');
        } else {
          alert('Post not deleted');
        }
      },
    });

    // alert('Form Submitted!');
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
            // onChange={val => this.onNameChange(val)}
            onChange={val => this.onChange('name', val)}
            value={this.state.name}
            onBlur={val => this.onBlur('name', val)}
            error={this.state.nameError}
          />
          <MyInput
            type="text"
            placeholder="enter your class"
            width={'100%'}
            label={'Class'}
            // onChange={val => this.onClassChange(val)}
            onChange={val => this.onChange('class', val)}
            value={this.state.class}
            onBlur={val => this.onBlur('class', val)}
            error={this.state.classError}
          />

          <MyInput
            type="number"
            placeholder="enter your marks"
            width={'100%'}
            label={'Number'}
            // onChange={val => this.onMarksChange(val)}
            onChange={val => this.onChange('marks', val)}
            value={this.state.marks}
            onBlur={val => this.onBlur('marks', val)}
            error={this.state.marksError}
          />

          <MyInput
            type="text"
            placeholder="enter your profession"
            width={'100%'}
            label={'Profession'}
            // onChange={val => this.onProfessionChange(val)}
            onChange={val => this.onChange('profession', val)}
            value={this.state.profession}
            onBlur={val => this.onBlur('profession', val)}
            error={this.state.professionError}
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
