import React from 'react';
import { Calendar, CheckCircle, Clock, XCircle, TrendingUp, Users } from 'lucide-react';
import { Container } from './style';

interface StatsCardsProps {
  stats: {
    totalReservations: number;
    confirmedReservations: number;
    pendingReservations: number;
    cancelledReservations: number;
  };
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <Container>
      <article className="card-container">
        <div className="card-content">
          <div className="flex-container">
            <p className="label">Reservas hoje</p>
            <Calendar className="icon calendar" />
          </div>
          <p className="value">{stats.totalReservations}</p>
        </div>
      </article>
      <article className="card-container">
        <div className="card-content">
          <div className="flex-container">
            <p className="label">Confirmadas</p>
            <CheckCircle className="icon confirmed" />
          </div>
          <p className="value">{stats.confirmedReservations}</p>
        </div>
      </article>
      <article className="card-container">
        <div className="card-content">
          <div className="flex-container">
            <p className="label">Pendentes</p>
            <Clock className="icon pending" />
          </div>
          <p className="value">{stats.pendingReservations}</p>
        </div>
      </article>
      <article className="card-container">
        <div className="card-content">
          <div className="flex-container">
            <p className="label">Canceladas</p>
            <XCircle className="icon cancelled" />
          </div>
          <p className="value">{stats.cancelledReservations}</p>
        </div>
      </article>
    </Container>
  );
};

export default StatsCards;