import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ReviewCard = (props) => {
  let review = props.review;

  const decideRating = (rating) => {
    let source = `images/${rating}star.jpeg`;
    return <img className="stars" src={source} alt="stars" />;

    // switch (rating) {
    //   case 1:
    //     return <img className="stars" src="images/1star.jpeg" alt="star" />;
    //   case 2:
    //     return <img className="stars" src="images/2star.jpeg" alt="star" />;
    //   case 3:
    //     return <img className="stars" src="images/3star.jpeg" alt="star" />;
    //   case 4:
    //     return <img className="stars" src="images/4star.jpeg" alt="star" />;
    //   case 5:
    //     return <img className="stars" src="images/5star.jpeg" alt="star" />;
    //   default:
    //     return <img className="stars" src="images/1star.jpeg" alt="star" />;
    // }
  };

  return (
    <div className="review-card">
      <div className="name font13 bold-text">{review.name}</div>
      <div className="rating "> {decideRating(review.rating)}</div>
      {/* <div className="rating">{review.rating}</div> */}
      <div className="desc font9 bold-text">{review.desc}</div>
    </div>
  );
};

class Reviews extends React.PureComponent {
  render() {
    return (
      <div className="reviews-container">
        <Carousel
          infiniteLoop={true}
          autoPlay={false}
          interval={30000}
          // onChange={() => console.log('Slide changed')}
          thumbWidth={200}
          width={'100%'}
        >
          {this.props.reviews &&
            this.props.reviews.map((review) => {
              return <ReviewCard review={review} something={1} azbc={true} />;
            })}
        </Carousel>
      </div>
    );
  }
}

export default Reviews;
