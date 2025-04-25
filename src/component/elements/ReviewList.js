import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  return (
    <section className="review">
      <div className="container">
        <div className="container__middle">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
        <div className="container__bottom">
          <button className="container__bottom__button">Load More Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewList;