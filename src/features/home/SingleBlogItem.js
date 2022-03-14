import React from 'react';

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
              <span>Best Tricks to Make Your React Native App Faster</span>
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
              <span className="general-text">
                Finally made a decision to build a mobile app and started hunting for the
                technologies that best fit your business goals? With the prediction that the mobile
                app development industry will generate a revenue of USD 532 billion by 2023, it’s
                high time to start leveraging the mobile market. However, with dozens of apps
                available on the app stores, business owners or entrepreneurs quickly get confused
                about how to get an edge to your business. Well, when you are looking to build your
                startup, you are already juggling with the questions like how to plan your app that
                delivers an excellent user experience and runs on multiple platforms without losing
                the quality. And with Android and iOS platforms occupying 98% of the market share,
                then surely your target is to reach the majority of mobile users and prefer
                launching an app that ensures a seamless experience on both platforms. If yes, then
                React Native is one of those cross-platform app development frameworks for mobile
                app development that perfectly suits your modern-day business needs. In fact, React
                Native is a perfect combination for businesses looking to create Native UI using the
                tool of their own choice and thrive to deliver an excellent user experience. If you
                are new to React Native and wondering why you should consider React Native Mobile
                App Development and How to boost the performance of React Native apps, then read
                below…
              </span>
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

export default SingleBlogItem;
