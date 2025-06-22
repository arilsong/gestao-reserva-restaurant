import React from 'react';
import { Star } from 'lucide-react';
import { Container } from './style';

interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

const RecentReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      author: 'Maria Silva',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excelente experiência! A comida estava deliciosa e o atendimento impecável.',
    },
    {
      author: 'João Santos',
      rating: 4,
      date: '2024-01-10',
      comment: 'Ambiente muito agradável e pratos bem preparados. Recomendo!',
    },
  ];

  return (
    <Container>
      <article className="card-container">
        <header className="card-header">
          <div className="header-content">
            <div>
              <h2 className="card-title">Avaliações Recentes</h2>
              <p className="card-description">Os comentários mais recentes dos seus clientes</p>
            </div>
            <button className="view-all-button">Ver Todas</button>
          </div>
        </header>
        <div className="card-content">
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                  <h4 className="review-author">{review.author}</h4>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`icon-star ${i < review.rating ? 'filled' : 'empty'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">{new Date(review.date).toLocaleDateString('pt-BR')}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default RecentReviews;