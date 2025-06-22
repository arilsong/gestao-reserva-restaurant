import React from 'react';
import { Star } from 'lucide-react';
import { Container } from './style';
import { Review } from '@/interfaces/review';


interface RestaurantReviewsProps {
  reviews: Review[];
}

const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({ reviews }) => {

  return (
    <Container>
      <article className="reviews-container">
        <header className="reviews-header">
          <h2 className="reviews-title">Avaliações</h2>
        </header>
        <section className="reviews-content">
          <ul className="reviews-list">
            {reviews.map((review) => (
              <li key={review.id} className="review-item">
                <div className="review-header">
                  <span className="review-author">{review.author}</span>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`icon-star ${i < review.classification ? 'rated' : ''}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
                <span className="review-date">
                  {new Date(review.date).toLocaleDateString('pt-BR')}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
};

export default RestaurantReviews;