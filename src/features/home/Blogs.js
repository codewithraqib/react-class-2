import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';

class Blogs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blogs: null,
    };

    console.log('All props in blogs are-------', this.props);

    this.props.actions.apiCall({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      callback: res => {
        console.log('data from fake api is-----', res);

        if (res && res.data) {
          this.setState({ blogs: res.data });
        }
      },
    });
  }

  render() {
    return (
      <div>
        {this.state.blogs &&
          this.state.blogs.map(blog => {
            return <div>{blog.title}</div>;
          })}
      </div>
    );
  }
}

// export default Blogs;

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

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
