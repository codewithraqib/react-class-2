import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bindActionCreators } from 'redux';
import * as commonActoins from '../common/redux/actions';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliders: [
        { img: '/images/slider/img1.jpg', msg: 'Message of slider 1' },
        { img: '/images/slider/img2.jpg', msg: 'Message of slider 2' },
        { img: '/images/slider/img3.jpg', msg: 'Message of slider 3' },
        { img: '/images/slider/img4.jpg', msg: 'Message of slider 4' },
        { img: '/images/slider/img2.jpg', msg: 'Message of slider 5' },
      ],

      latestItems: [
        { img: '/images/slider/img1.jpg', name: 'Item 1' },
        { img: '/images/slider/img2.jpg', name: 'Item 2' },
        { img: '/images/slider/img3.jpg', name: 'Item 3' },
        { img: '/images/slider/img4.jpg', name: 'Item 4' },
        { img: '/images/slider/img2.jpg', name: 'Item 5' },
      ],

      latestProducts: null,
    };

    this.getCategories();
    this.getProductList();
  }
  componentDidMount() {
    console.log('All props are----', this.props);
  }

  getCategories = () => {
    this.props.actions.apiCall({
      url: 'https://fakestoreapi.com/products/categories',
      method: 'GET',
      callback: res => {
        console.log('response from categories api is ===', res);

        if (res && res.data && res.data.length > 0) {
          this.setState({
            categories: res.data,
          });
        }
      },
    });
  };

  getProductList = () => {
    this.props.actions.apiCall({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
      callback: res => {
        console.log('response from api is ===', res);

        if (res && res.data && res.data.length > 0) {
          this.setState({
            latestProducts: res.data.slice(1, 6),
            mostSellingProducts: res.data.slice(6, 11),
          });
        }
      },
    });
  };

  setProduct = item => {
    this.props.actions.setProductInFocus(item);

    localStorage.setItem('productInFocus', JSON.stringify(item));

    setTimeout(() => {
      this.props.history.push('/product');
    }, 500);
  };

  renderLatestItem = (item, index) => {
    return (
      <div key={index} className="latest-item" onClick={() => this.setProduct(item)}>
        <div className="img-container">
          <img src={item.image} alt="" />
        </div>
        <div className="product-name">
          <span>{item.title.substr(0, 30) + '...'}</span>
        </div>

        <div className="product-price">
          <span>{'Price: ' + item.price}</span>
          <span>{'Rating: ' + item.rating.rate + ` (${item.rating.count})`}</span>
        </div>
      </div>
    );
  };

  goToCategory = item => {
    this.props.history.push(`/category/${item}`);
  };

  renderCategoryItem = (item, index) => {
    console.log('Item and index is----', item, index);

    return (
      <div className="category-item" key={index} onClick={() => this.goToCategory(item)}>
        <div className="img-container">
          <img src="/images/slider/img1.jpg" alt="" />
        </div>

        <div className="category-name">
          <span>{item}</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="home-welcome-page">
        <Carousel showThumbs={false} showIndicators={true}>
          {this.state.sliders &&
            this.state.sliders.map(slide => {
              return (
                <div>
                  <img src={slide.img} alt={slide.msg} />
                  {/* <p className="legend">{slide.msg}</p> */}
                </div>
              );
            })}
        </Carousel>

        <section className="latest-items-section">
          <div className="latest-items-container content-wrapper">
            <div className="title">Categories</div>
            <div className="all-category-items ">
              {this.state.categories &&
                this.state.categories.map((item, index) => this.renderCategoryItem(item, index))}
            </div>
          </div>
        </section>

        <section className="latest-items-section">
          <div className="latest-items-container content-wrapper">
            <div className="title">Latest Products</div>
            <div className="all-latest-items ">
              {this.state.latestProducts &&
                this.state.latestProducts.map((item, index) => this.renderLatestItem(item, index))}
            </div>
          </div>
        </section>

        <section className="latest-items-section">
          <div className="latest-items-container content-wrapper">
            <div className="title">Most Selling Products</div>
            <div className="all-latest-items ">
              {this.state.mostSellingProducts &&
                this.state.mostSellingProducts.map((item, index) =>
                  this.renderLatestItem(item, index),
                )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// export default WelcomePage;

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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
