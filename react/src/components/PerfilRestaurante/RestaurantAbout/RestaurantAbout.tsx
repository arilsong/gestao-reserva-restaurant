import React from 'react';
import { Container } from './style.js';

interface RestaurantAboutProps {
  description: string;
}

const RestaurantAbout: React.FC<RestaurantAboutProps> = ({ description }) => {
  return (
    <Container>
      <article className="about-container">
        <header className="about-header">
          <h2 className="about-title">Sobre o Restaurante</h2>
        </header>
        <section className="about-content">
          <p className="about-description">{description}</p>
        </section>
      </article>
    </Container>
  );
};

export default RestaurantAbout;