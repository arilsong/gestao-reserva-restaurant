import React, { useEffect, useState } from 'react';
import { Star, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { Restaurant } from '@/interfaces/restaurant';
import axios from 'axios';
import { RESTAURANT_ENDPOINTS } from '@/service/api/endpoints';
import api from '@/service/api/api';

const FeaturedRestaurants = () => {
  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(RESTAURANT_ENDPOINTS.GETALL);
        const data = response.data;

        // Aqui mapeamos para adaptar os dados do backend ao frontend
        const mapped = data.map((r: any): Restaurant => ({
          id: r.id,
          name: r.name,
          phone: '',
          email: '',
          description: '',
          hours: '',
          availableHours: [],
          cuisine: r.cuisine || 'Diverso',
          rating: r.rating,
          location: r.address,
          image: r.photos?.[0] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
          priceRange: r.price_range,
          availableTables: r.tables?.filter((t: any) => t.available).length ?? 0,
          reviews: r.reviews,
          availabilitys: []
        }));


        setRestaurants(mapped);
        
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

 /*  restaurants.map((restaurant) =>{
    console.log(restaurant.reviews.length);
    restaurant.rating = 3;
  }) */

  /* const featuredRestaurants = [
    {
      id: 1,
      name: "Bella Vista",
      cuisine: "Italiana",
      rating: 4.8,
      location: "Centro",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      priceRange: "€€€",
      availableTables: 5
    },
    {
      id: 2,
      name: "Sushi Zen",
      cuisine: "Japonesa",
      rating: 4.9,
      location: "Zona Norte",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      priceRange: "€€€€",
      availableTables: 3
    },
    {
      id: 3,
      name: "O Tasquinha",
      cuisine: "Tradicional",
      rating: 4.6,
      location: "Alfama",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      priceRange: "€€",
      availableTables: 8
    }
  ]; */

  return (
    <Container>
        <article className="restaurants-container">
        <header className="restaurants-header">
          <h2 className="restaurants-title">Restaurantes em Destaque</h2>
          <p className="restaurants-description">Os mais populares da sua região</p>
        </header>

        <div className="restaurants-grid">
          {restaurants.map((restaurant) => (
            <article key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image-wrapper">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="restaurant-image"
                />
                <span className="price-badge">{restaurant.priceRange}</span>
              </div>
              <header className="restaurant-header">
                <div className="restaurant-info">
                  <h3 className="restaurant-title">{restaurant.name}</h3>
                  <p className="restaurant-location">
                    <MapPin className="icon-map-pin" />
                    {restaurant.location}
                  </p>
                </div>
                <div className="restaurant-rating">
                  <Star className="icon-star" />
                  <span className="rating-value">{restaurant.rating}</span>
                </div>
              </header>
              <section className="restaurant-content">
                <div className="restaurant-details">
                  <span className="cuisine-badge">{restaurant.cuisine}</span>
                  <p className="available-tables">
                    <Users className="icon-users" />
                    {restaurant.availableTables} mesas disponíveis
                  </p>
                </div>
                <button
                  className="availability-button"
                  onClick={() => navigate(`/perfil-restaurante/${restaurant.id}`)}
                >
                  Ver Disponibilidade
                </button>
              </section>
            </article>
          ))}
        </div>
      </article>
    </Container>
  );
};

export default FeaturedRestaurants;