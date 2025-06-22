import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Container } from './style';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
        <article className="hero-container">
        <header className="hero-header">
          <h1 className="hero-title">
            Reserve a sua mesa
            <span className="hero-title-highlight">em segundos</span>
          </h1>
          <p className="hero-description">
            Descubra os melhores restaurantes da sua cidade e faça reservas instantâneas. 
            Simples, rápido e sem complicações.
          </p>
        </header>

        <section className="search-container">
          <div className="search-wrapper">
            <Search className="icon-search" />
            <input
              type="text"
              placeholder="Procurar restaurantes, cozinha, localização..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">Procurar</button>
          </div>
        </section>

        <section className="stats-container">
          <article className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Restaurantes</div>
          </article>
          <article className="stat-item">
            <div className="stat-value">10k+</div>
            <div className="stat-label">Reservas</div>
          </article>
          <article className="stat-item">
            <div className="stat-value">4.9</div>
            <div className="stat-label">Avaliação</div>
          </article>
        </section>
      </article>
    </Container>
  );
};

export default HeroSection;