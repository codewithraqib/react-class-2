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

        if (res && res.data && res.data.length > 0) {
          // this.setState({ blogs: res.data });

          this.props.actions.storeBlogs(res.data);

          localStorage.setItem('allBlogs', JSON.stringify(res.data));
        } else {
          this.setState({ error: 'Some issue in geetting data' });
        }
      },
    });

    setTimeout(() => {
      console.log('testing All props in blogs page are------', this.props);
    }, 2000);
  }

  goToBlog = blog => {
    this.props.actions.setBlogInFocus(blog);

    localStorage.setItem('blogInFocus', JSON.stringify(blog));

    this.props.history.push('/blog');

    setTimeout(() => {
      console.log('Testing props after setting blog in focus----', this.props);
    }, 2000);
  };

  renderBlogItem = blog => {
    return (
      <div className="blog-item" onClick={() => this.goToBlog(blog)}>
        <div>
          <img src="images/insta.png" alt="" />
        </div>

        <div>
          <div className="sub-title">{blog.title} </div>
          <div className="general-text">{blog.body} </div>
        </div>
      </div>
    );
  };

  render() {
    // console.log('All props in blogs page are------', this.props);
    return (
      <div className="blogs-container content-wrapper">
        {this.props.home.blogs &&
          this.props.home.blogs.map(blog => {
            return this.renderBlogItem(blog);
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
