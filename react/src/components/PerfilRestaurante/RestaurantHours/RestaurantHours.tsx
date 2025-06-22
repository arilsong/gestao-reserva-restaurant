import React from 'react';
import { Container } from './style';

interface RestaurantHoursProps {
  hours: Record<string, String>;
}

const RestaurantHours: React.FC<RestaurantHoursProps> = ({ hours }) => {
  const days: { [key: string]: string } = {
    seg: 'Segunda-feira',
    ter: 'Terça-feira',
    qua: 'Quarta-feira',
    qui: 'Quinta-feira',
    sex: 'Sexta-feira',
    sab: 'Sábado',
    dom: 'Domingo',
  };

  return (
    <Container>
      <article className="hours-container">
        <header className="hours-header">
          <h2 className="hours-title">Horários de Funcionamento</h2>
        </header>
        <section className="hours-content">
          <ul className="hours-list">
            {Object.entries(hours).map(([day, time]) => (
              <li key={day} className="hours-item">
                <span className="hours-day">{day}</span>
                <span className="hours-time">{time}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
};

export default RestaurantHours;