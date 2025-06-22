import React from 'react';
import { Star, Phone, Mail } from 'lucide-react';
import { Container } from './style';
import TableSelection from '@/components/TableSelection/TableSelection';


interface Table {
  id: string;
  number: number;
  capacity: number;
  available: boolean;
  location?: string;
}

interface ReservationSidebarProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  selectedGuests: number;
  setSelectedGuests: (guests: number) => void;
  selectedTableId?: string;
  setSelectedTableId: (tableId: string) => void;
  availableHours: string[];
  tables: Table[];
  onReserva: () => void;
  onShowAvaliacaoOverlay: () => void;
  restaurant: {
    phone: string;
    email: string;
  };
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedGuests,
  setSelectedGuests,
  selectedTableId,
  setSelectedTableId,
  availableHours,
  tables,
  onReserva,
  onShowAvaliacaoOverlay,
  restaurant,
}) => {
  // Verificar se deve mostrar a seleção de mesa
  const showTableSelection = selectedDate && selectedTime;

  return (
    <Container>
      <article className="card-container">
        <header className="card-header">
          <h2 className="card-title">Fazer Reserva</h2>
          <p className="card-description">Selecione data, horário e número de pessoas</p>
        </header>
        <section className="card-content">
          <div className="input-group">
            <label htmlFor="date" className="label">Data *</label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="input"
              required
            />
          </div>

          <div className="input-group">
            <label className="label">Horário *</label>
            <div className="time-grid">
              {availableHours.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            {!selectedTime && <p className="error-text">Selecione um horário</p>}
          </div>

          <div className="input-group">
            <label htmlFor="guests" className="label">Número de pessoas</label>
            <select
              id="guests"
              value={selectedGuests}
              onChange={(e) => setSelectedGuests(Number(e.target.value))}
              className="input"
            >
              <option value="1">1 pessoa</option>
              <option value="2">2 pessoas</option>
              <option value="3">3 pessoas</option>
              <option value="4">4 pessoas</option>
              <option value="5">5+ pessoas</option>
            </select>
          </div>

          {/* Componente de Seleção de Mesa */}
          {showTableSelection && (
            <div className="input-group">
              <TableSelection
                tables={tables}
                selectedTableId={selectedTableId || ''}
                onTableSelect={setSelectedTableId}
                selectedGuests={selectedGuests}
                className="compact" 
              />
            </div>
          )}

          <button
            type="button"
            onClick={onReserva}
            className="submit-button"
            disabled={!selectedDate || !selectedTime || (showTableSelection && !selectedTableId)}
          >
            Reservar Mesa
          </button>

          {(!selectedDate || !selectedTime) && (
            <p className="info-text">Selecione data e horário para continuar</p>
          )}

          {showTableSelection && !selectedTableId && (
            <p className="info-text">Selecione uma mesa para continuar</p>
          )}

          <button
            type="button"
            onClick={onShowAvaliacaoOverlay}
            className="outline-button"
          >
            <Star className="icon-star" />
            Avaliar Restaurante
          </button>

          <div className="contact-section">
            <div className="contact-item">
              <Phone className="icon-contact" />
              {restaurant.phone}
            </div>
            <div className="contact-item">
              <Mail className="icon-contact" />
              {restaurant.email}
            </div>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default ReservationSidebar;