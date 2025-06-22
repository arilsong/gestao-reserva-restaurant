import React, { useState } from 'react';
import { Calendar, Clock, Users, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';
import api from '@/service/api/api';
import { BOOKING_ENDPOINTS } from '@/service/api/endpoints';
import { UUID } from 'crypto';
import { useAuth } from '@/context/AuthContext';


interface FormData {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  specialOccasion: string;
  date: String;
  time: String;
  numberOfPeople: number;
}

interface RestaurantData {
  name: string;
  date: string;
  bookingTime: string;
  guests: number;
  tableId: string;
  tableNumber: number;
}

interface FormularioReservaOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantData?: RestaurantData;
  restaurantId: UUID;
}

const FormularioReservaOverlay: React.FC<FormularioReservaOverlayProps> = ({
  isOpen,
  onClose,
  restaurantData,
  restaurantId
}) => {
  const {user} = useAuth();
  const { toast } = useToast();
  const [isReservingForSomeoneElse, setIsReservingForSomeoneElse] = useState(false);
    const reservationDetails: RestaurantData = restaurantData;
  const [formData, setFormData] = useState<FormData>({
    guestName: user?.name,
    guestEmail: user?.email,
    guestPhone: user?.phone,
    specialRequests: '',
    specialOccasion: '',
    date: restaurantData.date,
    time: restaurantData.bookingTime,
    numberOfPeople: restaurantData.guests
  });

  const timToSend = restaurantData.bookingTime + ":00";

  const dataToSend = {
    ...formData,
    time: timToSend,
    guestName: isReservingForSomeoneElse ? formData.guestName : user?.name,
    guestEmail: isReservingForSomeoneElse ? formData.guestEmail : user?.email,
    guestPhone: isReservingForSomeoneElse ? formData.guestPhone : user?.phone,
  }

  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log(dataToSend);
    

    try {
      const response = await api.post(BOOKING_ENDPOINTS.CREATE(restaurantId), dataToSend)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
   
    toast({
      title: 'Reserva confirmada!',
      description: 'Você receberá uma confirmação por email em breve.',
    });
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <Container>
      <section className="overlay-section">
        <article className="card-container">
          <header className="card-header">
            <h2 className="card-title">Finalizar Reserva</h2>
            <button className="close-button" onClick={onClose}>
              <X className="icon-close" />
            </button>
          </header>

          <section className="card-content">
            <div className="reservation-grid">
              <div className="reservation-form">
                <article className="form-container">
                  <header className="form-header">
                    <h3 className="form-title">Informações do Cliente</h3>
                  </header>
                  <section className="form-content">
                    <form onSubmit={handleSubmit}>
                      <fieldset className="input-group full-width">
                        <label className="label option">
                          <input
                            type="checkbox"
                            checked={isReservingForSomeoneElse}
                            onChange={(e) => setIsReservingForSomeoneElse(e.target.checked)}
                            className="checkbox"
                          />
                          Reservar para outra pessoa
                        </label>
                      </fieldset>


                      <div className="input-grid">
                        
                        {isReservingForSomeoneElse && (
                        <>
                          <fieldset className="input-group">
                            <label htmlFor="guestName" className="label">
                              Nome Completo *
                            </label>
                            <div className="input-wrapper">
                              <input
                                id="guestName"
                                name="guestName"
                                type="text"
                                value={formData.guestName}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="Nome da pessoa"
                              />
                            </div>
                          </fieldset>

                          <fieldset className="input-group">
                            <label htmlFor="guestEmail" className="label">
                              E-mail *
                            </label>
                            <div className="input-wrapper">
                              <input
                                id="guestEmail"
                                name="guestEmail"
                                type="email"
                                value={formData.guestEmail}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="email@exemplo.com"
                              />
                            </div>
                          </fieldset>

                          <fieldset className="input-group full-width">
                            <label htmlFor="guestPhone" className="label">
                              Telefone *
                            </label>
                            <div className="input-wrapper">
                              <input
                                id="guestPhone"
                                name="guestPhone"
                                type="tel"
                                value={formData.guestPhone}
                                onChange={handleInputChange}
                                className="input"
                                placeholder="(11) 99999-9999"
                              />
                            </div>
                          </fieldset>
                        </>
                      )}


                        <fieldset className="input-group full-width">
                          <label htmlFor="specialRequests" className="label">
                            Observações Especiais
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            rows={3}
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            className="textarea"
                            placeholder="Aniversário, restrições alimentares, etc."
                          />
                        </fieldset>
                        <fieldset className="input-group full-width">
                          <label htmlFor="paymentMethod" className="label">
                            Forma de Pagamento
                          </label>
                          <select
                            id="paymentMethod"
                            name="paymentMethod"
                            /* value={formData.paymentMethod} */
                            onChange={handleInputChange}
                            className="select"
                          >
                            <option value="presencial">Pagamento no Local</option>
                            <option value="cartao">Cartão de Crédito</option>
                            <option value="pix">PIX</option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>
                          Cancelar
                        </button>
                        <button type="submit" className="submit-button">
                          Confirmar Reserva
                        </button>
                      </div>
                    </form>
                  </section>
                </article>
              </div>

              <div className="reservation-summary">
                <article className="summary-container">
                  <header className="summary-header">
                    <h3 className="summary-title">Resumo da Reserva</h3>
                  </header>
                  <section className="summary-content">
                    <h4 className="restaurant-name">{reservationDetails.name}</h4>
                    <div className="summary-details">
                      <div className="detail-item">
                        <Calendar className="icon-info" />
                        <span className="detail-label">Data</span>
                        <span className="detail-value">
                          {new Date(reservationDetails.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <div className="detail-item">
                        <Clock className="icon-info" />
                        <span className="detail-label">Horário</span>
                        <span className="detail-value">{reservationDetails.bookingTime}</span>
                      </div>
                      <div className="detail-item">
                        <Users className="icon-info" />
                        <span className="detail-label">Pessoas</span>
                        <span className="detail-value">{reservationDetails.guests}</span>
                      </div>
                    </div>
                    <div className="policy-container">
                      <h5 className="policy-title">Política de Cancelamento</h5>
                      <p className="policy-text">
                        Cancelamento gratuito até 2 horas antes da reserva.
                      </p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default FormularioReservaOverlay;