import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Star, Phone, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';

interface Reservation {
  id: number;
  restaurant: string;
  date: string;
  time: string;
  guests: number;
  status: string;
  location: string;
  phone: string;
  image: string;
  rated?: boolean;
}

interface MinhasReservasOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRating?: (reservationId: number) => void;
}

const MinhasReservasOverlay: React.FC<MinhasReservasOverlayProps> = ({ isOpen, onClose, onOpenRating }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'proximas' | 'historico'>('proximas');

  const reservas: { proximas: Reservation[]; historico: Reservation[] } = {
    proximas: [
      {
        id: 1,
        restaurant: 'Bella Vista',
        date: '2024-01-20',
        time: '20:00',
        guests: 2,
        status: 'confirmada',
        location: 'Rua das Flores, 123',
        phone: '(11) 9999-9999',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop',
      },
      {
        id: 2,
        restaurant: 'Sushi Zen',
        date: '2024-01-25',
        time: '19:30',
        guests: 4,
        status: 'pendente',
        location: 'Av. Paulista, 1000',
        phone: '(11) 8888-8888',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
      },
    ],
    historico: [
      {
        id: 3,
        restaurant: 'O Tasquinha',
        date: '2024-01-10',
        time: '21:00',
        guests: 2,
        status: 'concluida',
        location: 'Alfama, 456',
        phone: '(11) 7777-7777',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop',
        rated: false,
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmada':
        return 'status-confirmada';
      case 'pendente':
        return 'status-pendente';
      case 'concluida':
        return 'status-concluida';
      case 'cancelada':
        return 'status-cancelada';
      default:
        return 'status-default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmada':
        return 'Confirmada';
      case 'pendente':
        return 'Pendente';
      case 'concluida':
        return 'Concluída';
      case 'cancelada':
        return 'Cancelada';
      default:
        return status;
    }
  };

  const handleCancelReservation = (id: number) => {
    toast({
      title: 'Reserva cancelada',
      description: 'Sua reserva foi cancelada com sucesso.',
    });
  };

  const handleRateRestaurant = (id: number) => {
    onOpenRating?.(id);
  };

  if (!isOpen) return null;

  return (
    <Container>
      <section className="overlay-section">
        <article className="card-container">
          <header className="card-header">
            <h2 className="card-title">Minhas Reservas</h2>
            <button className="close-button" onClick={onClose}>
              <X className="icon-close" />
            </button>
          </header>

          <section className="card-content">
            <div className="tabs-container">
              <button
                className={`tab-button ${activeTab === 'proximas' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('proximas')}
              >
                Próximas Reservas
              </button>
              <button
                className={`tab-button ${activeTab === 'historico' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('historico')}
              >
                Histórico
              </button>
            </div>

            <div className="reservations-list">
              {reservas[activeTab].length === 0 ? (
                <article className="empty-state">
                  <Calendar className="icon-empty" />
                  <h3 className="empty-title">Nenhuma reserva encontrada</h3>
                  <p className="empty-description">
                    {activeTab === 'proximas'
                      ? 'Você não tem reservas próximas.'
                      : 'Seu histórico de reservas está vazio.'}
                  </p>
                </article>
              ) : (
                reservas[activeTab].map((reserva) => (
                  <article key={reserva.id} className="reservation-card">
                    <div className="reservation-image">
                      <img
                        src={reserva.image}
                        alt={reserva.restaurant}
                        className="image"
                      />
                    </div>
                    <div className="reservation-content">
                      <div className="reservation-header">
                        <div>
                          <h3 className="reservation-title">{reserva.restaurant}</h3>
                          <div className="reservation-location">
                            <MapPin className="icon-info" />
                            <span>{reserva.location}</span>
                          </div>
                        </div>
                        <span className={`reservation-status ${getStatusColor(reserva.status)}`}>
                          {getStatusText(reserva.status)}
                        </span>
                      </div>

                      <div className="reservation-details">
                        <div className="detail-item">
                          <Calendar className="icon-info" />
                          <span>{new Date(reserva.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="detail-item">
                          <Clock className="icon-info" />
                          <span>{reserva.time}</span>
                        </div>
                        <div className="detail-item">
                          <Users className="icon-info" />
                          <span>{reserva.guests} pessoas</span>
                        </div>
                      </div>

                      <div className="reservation-footer">
                        <div className="reservation-contact">
                          <Phone className="icon-info" />
                          <span>{reserva.phone}</span>
                        </div>
                        <div className="reservation-actions">
                          {activeTab === 'proximas' && reserva.status === 'confirmada' && (
                            <button
                              className="action-button cancel"
                              onClick={() => handleCancelReservation(reserva.id)}
                            >
                              Cancelar
                            </button>
                          )}
                          {activeTab === 'historico' && reserva.status === 'concluida' && !reserva.rated && (
                            <button
                              className="action-button rate"
                              onClick={() => handleRateRestaurant(reserva.id)}
                            >
                              <Star className="icon-action" />
                              Avaliar
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default MinhasReservasOverlay;