import React from 'react';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';

class SingleBlogItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      relatedBlogs: [
        {
          image: 'images/insta.png',
          title: 'A React Native Learning Roadmap Based on My Professional & Teaching Experience',
        },
        {
          image: 'images/insta.png',
          title: 'React Native Best Practices Every Developer Should Follow',
        },
        {
          image: 'images/insta.png',
          title:
            'React Native App Performance- PART 2 \nGood performance is important for every ap',
        },
        {
          image: 'images/insta.png',
          title: 'Developing mobile applications in the cloud',
        },
      ],
    };

    console.log('testing all props in single blog item----', this.props);
  }

  renderSingleBlog = blog => {
    return (
      <div className="blog-item">
        <div className="blog-img">
          <img src={blog.image} alt="" />
        </div>
        <div className="blog-title">{blog.title}</div>
      </div>
    );
  };

  render() {
    return (
      <div className="single-blog-container">
        <div className="left-section">
          <div className="logo-container">
            <img src="/images/insta.png" alt="" />
          </div>
          <div className="main-icons">
            <div className="inner">
              <img src="/images/insta.png" alt="" />
              <img src="/images/insta.png" alt="" />
              <img src="/images/insta.png" alt="" />
            </div>
          </div>
          <div className="profile">
            <img src="/images/insta.png" alt="" />
          </div>
        </div>

        <div className="mid-section">
          <div className="top-bar">
            <span>Published in JavaScript in Plain English</span>
          </div>
          <div className="main-body">
            <div className="author-section">
              <div className="avatar">
                <img src="images/insta.png" alt="" />
              </div>
              <div className="auther-details">
                <div className="name">
                  <span>Sophia Martin</span>
                </div>
                <div>
                  <span>Nov 15, 2021</span>
                </div>
              </div>
            </div>

            <div className="title">
              <span>{this.props.home.blogInFocus.title}</span>
            </div>

            <div className="sub-title">
              <span>
                Why Businesses Should Consider Using React Native Mobile Apps and How To Boost App
                Performance
              </span>
            </div>

            <div className="main-blog-image">
              <img src="images/blog-back.png" alt="" />
            </div>

            <div className="blog-desc">
              <span className="general-text">{this.props.home.blogInFocus.body}</span>
            </div>

            <div className="more-at">
              <span>
                More content at plainenglish.io. Sign up for our free weekly newsletter here.
              </span>
            </div>
          </div>
          {/* <div className="related-blogs"></div> */}
        </div>

        <div className="right-section">
          <div className="profile-section">
            <div className="avatar">
              <img src="images/insta.png" alt="" />
            </div>
            <div className="name">
              <span className="sub-title">Sophia Martin</span>
            </div>

            <div className="followers">
              <span className="sub-title">16.5K Followers</span>
            </div>

            <div className="auth-desc">
              <span>
                Sr. Business Analyst & Tech Writer— Xicom.biz | Write on Trending Technology | Sr.
                IT Consultant. 13+ Years of Exp. | Linkedin: https://bit.ly/2TVwiBW
              </span>
            </div>
          </div>

          <div className="related-blogs">
            {this.state.relatedBlogs.map(blog => {
              return this.renderSingleBlog(blog);
            })}
          </div>
        </div>
      </div>
    );
  }
}

// export default SingleBlogItem;

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogItem);
