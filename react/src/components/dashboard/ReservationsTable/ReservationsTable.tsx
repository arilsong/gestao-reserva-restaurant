import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Container } from './style';

interface Reservation {
  id: number;
  customerName: string;
  time: string;
  guests: number;
  status: string;
  phone: string;
  specialRequests: string;
}

interface ReservationsTableProps {
  reservations: Reservation[];
  selectedDate: string;
  onStatusChange: (id: number, status: string) => void;
}

const ReservationsTable: React.FC<ReservationsTableProps> = ({ reservations, selectedDate, onStatusChange }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'confirmada': return 'confirmed';
      case 'pendente': return 'pending';
      case 'check-in': return 'check-in';
      case 'concluida': return 'completed';
      case 'cancelada': return 'canceled';
      default: return 'default';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'confirmada': return 'Confirmada';
      case 'pendente': return 'Pendente';
      case 'check-in': return 'Check-in';
      case 'concluida': return 'Concluída';
      case 'cancelada': return 'Cancelada';
      default: return status;
    }
  };

  return (
    <Container>
      <article className="card-container">
        <header className="card-header">
          <div className="header-content">
            <div>
              <h2 className="card-title">Reservas do Dia</h2>
              <p className="card-description">
                {new Date(selectedDate).toLocaleDateString('pt-BR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <button className="new-reservation-button">Nova Reserva</button>
          </div>
        </header>
        <div className="card-content">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th className="table-cell header-cell">Cliente</th>
                  <th className="table-cell header-cell">Horário</th>
                  <th className="table-cell header-cell">Pessoas</th>
                  <th className="table-cell header-cell">Status</th>
                  <th className="table-cell header-cell">Contato</th>
                  <th className="table-cell header-cell">Observações</th>
                  <th className="table-cell header-cell">Ações</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="table-row">
                    <td className="table-cell">
                      <div className="customer-name">{reservation.customerName}</div>
                    </td>
                    <td className="table-cell">
                      <div className="flex-container">
                        <Clock className="icon-clock" />
                        {reservation.time}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex-container">
                        <Users className="icon-users" />
                        {reservation.guests}
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className={`badge ${getStatusColor(reservation.status)}`}>
                        {getStatusText(reservation.status)}
                      </span>
                    </td>
                    <td className="table-cell">
                      <div className="contact-info">{reservation.phone}</div>
                    </td>
                    <td className="table-cell">
                      <div className="special-requests">{reservation.specialRequests || '-'}</div>
                    </td>
                    <td className="table-cell">
                      <div className="actions">
                        {reservation.status === 'confirmada' && (
                          <button
                            className="action-button outline"
                            onClick={() => onStatusChange(reservation.id, 'check-in')}
                          >
                            Check-in
                          </button>
                        )}
                        {reservation.status === 'pendente' && (
                          <button
                            className="action-button primary"
                            onClick={() => onStatusChange(reservation.id, 'confirmada')}
                          >
                            Confirmar
                          </button>
                        )}
                        {reservation.status === 'check-in' && (
                          <button
                            className="action-button primary"
                            onClick={() => onStatusChange(reservation.id, 'concluída')}
                          >
                            Concluir
                          </button>
                        )}
                        {reservation.status !== 'cancelada' && reservation.status !== 'concluida' && (
                          <button
                            className="action-button outline"
                            onClick={() => onStatusChange(reservation.id, 'cancelada')}
                          >
                            Cancelar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {reservations.length === 0 && (
                  <tr>
                    <td colSpan={7} className="table-cell empty-state">
                      Nenhuma reserva para hoje
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default ReservationsTable;