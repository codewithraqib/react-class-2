import React from 'react';

class SingleBlogItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
            <span>Published in</span>
          </div>
          <div className="main-body"></div>
          <div className="related-blogs"></div>
        </div>

        <div className="right-section"></div>
      </div>
    );
  }
}

export default SingleBlogItem;
