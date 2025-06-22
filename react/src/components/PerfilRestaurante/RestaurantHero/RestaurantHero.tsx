import React from 'react';
import { Star } from 'lucide-react';
import { Container } from './style';
import { Availability } from '@/interfaces/availability';

interface RestaurantHeroProps {
  restaurant: {
      id: string;
      name: string;
      cuisine?: string;
      rating?: number | string;
      totalReviews?: number;
      location: string;
      phone: string;
      email: string;
      image: string; // geralmente `photos[0]`
      description: string;
      priceRange: string;// vindo de availability
      availableHours: string[];     // idem
      availableTables: any;
      reviews: any;
      availabilitys: Availability[]
  };
  onShowAvaliacaoOverlay: () => void;
}

const RestaurantHero: React.FC<RestaurantHeroProps> = ({
  restaurant,
  onShowAvaliacaoOverlay,
}) => {
  return (
    <Container>
      <section className="hero-section">
        <div className="hero-image">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="hero-img"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{restaurant.name}</h1>
          <div className="hero-meta">
            <span className="hero-cuisine">{restaurant.cuisine}</span>
            <span className="hero-price">{restaurant.priceRange}</span>
            <div className="hero-rating">
              <Star className="icon-star rated" />
              <span>{restaurant.rating}</span>
              <span>({restaurant.totalReviews} avaliações)</span>
            </div>
          </div>
          <div className="hero-location">
            <span>{restaurant.location}</span>
          </div>
          <button className="hero-button" onClick={onShowAvaliacaoOverlay}>
            Avaliar Restaurante
          </button>
        </div>
      </section>
    </Container>
  );
};

export default RestaurantHero;