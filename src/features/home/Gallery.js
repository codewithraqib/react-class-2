import React from 'react';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.actions.apiCall({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'GET',
      callback: res => {
        console.log('testing data from fake gallery api is-----', res);

        if (res && res.data && res.data.length > 0) {
          // this.setState({ blogs: res.data });

          //   setTimeout(() => {
          this.props.actions.setGallery(res.data);

          //   localStorage.setItem('gallery', JSON.stringify(res.data));
          //   }, 2000);
        } else {
          this.setState({ error: 'Some issue in geetting data' });
        }
      },
    });
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('testing all props ijn gallery are---', this.props);
    }, 1000);
  }

  renderGalleryItem = item => {
    // console.log('testing Gallery item received is----', item);
    return (
      <div className="gallery-item">
        <img src={item.url} alt="" />
      </div>
    );
  };

  render() {
    return (
      <div className="gallery-container content-wrapper">
        {' '}
        {this.props.home &&
          this.props.home.gallery &&
          this.props.home.gallery.map(item => this.renderGalleryItem(item))}{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
