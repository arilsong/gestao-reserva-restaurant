import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Container>
        <article className="cta-container">
        <h2 className="cta-title">É dono de um restaurante?</h2>
        <p className="cta-description">
          Junte-se à nossa plataforma e gerencie as suas reservas de forma eficiente
        </p>
        <div className="cta-buttons">
          <button
            className="cta-button secondary"
            onClick={() => navigate('/restaurante/registro')}
          >
            Registar Restaurante
          </button>
          <button
            className="cta-button outline"
            onClick={() => navigate('/restaurante/login')}
          >
            Fazer Login
          </button>
        </div>
      </article>
    </Container>
  );
};

export default CallToAction;