import React from 'react';

const ReviewCard = props => {
  //   let {review, abc} = props;
  let review = props.review;

  return (
    <div>
      <div className="name">{review.name}</div>
      <div className="rating">{review.rating}</div>
      <div className="desc">{review.desc}</div>
    </div>
  );
};

class Reviews extends React.PureComponent {
  render() {
    return (
      <div className="reviews-container">
        {this.props.reviews &&
          this.props.reviews.map(review => {
            return <ReviewCard review={review} />;
          })}
      </div>
    );
  }
}

export default Reviews;
