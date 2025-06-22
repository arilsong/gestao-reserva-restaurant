import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Clock, Users, Phone, Calendar, Plus, Search, Filter } from 'lucide-react';
import { Container, DialogContent } from './style';
import { UUID } from 'crypto';
import { BOOKING_ENDPOINTS } from '@/service/api/endpoints';
import api from '@/service/api/api';

interface Reservation {
  id: UUID;
  restaurantId: UUID;
  clientId: UUID;
  clientName: string;
  date: string;
  time: string;
  numberOfPeople: number;
  status: string;
  phone: string;
  email: string;
  specialRequests: string;
  confirmationCode: number;
}

interface NewReservation {
  customerName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}


const DashboardReservas: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('todas');
  const [isNewReservationOpen, setIsNewReservationOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const [reservations, setReservations] = useState<Reservation[]>([
/*     {
      id: 1,
      customerName: 'Maria Silva',
      date: '2024-01-15',
      time: '19:00',
      guests: 2,
      status: 'confirmada',
      phone: '(11) 99999-9999',
      email: 'maria@email.com',
      specialRequests: 'Mesa próxima à janela',
    },
    {
      id: 2,
      customerName: 'João Santos',
      date: '2024-01-15',
      time: '19:30',
      guests: 4,
      status: 'pendente',
      phone: '(11) 88888-8888',
      email: 'joao@email.com',
      specialRequests: '',
    },
    {
      id: 3,
      customerName: 'Ana Costa',
      date: '2024-01-15',
      time: '20:00',
      guests: 3,
      status: 'confirmada',
      phone: '(11) 77777-7777',
      email: 'ana@email.com',
      specialRequests: 'Aniversário - bolo',
    },
    {
      id: 4,
      customerName: 'Carlos Lima',
      date: '2024-01-16',
      time: '20:30',
      guests: 2,
      status: 'check-in',
      phone: '(11) 66666-6666',
      email: 'carlos@email.com',
      specialRequests: '',
    }, */
  ]);

  useEffect(() => {
    const fetchBookings = async () => {

      try {
        const response = await api.get(BOOKING_ENDPOINTS.GETALL_RESTAURANT);
        const r = response.data;
        setReservations(r)
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível carregar os dados do restaurante.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [toast]);

  const [newReservation, setNewReservation] = useState<NewReservation>({
    customerName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'CONFIRMED': return 'confirmed';
      case 'PENDING': return 'pending';
      case 'CHECKIN': return 'check-in';
      case 'COMPLETED': return 'completed';
      case 'CANCELLED': return 'canceled';
      default: return 'default';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'CONFIRMED': return 'Confirmada';
      case 'PENDING': return 'Pendente';
      case 'CHECKIN': return 'Check-in';
      case 'COMPLETED': return 'Concluída';
      case 'CANCELLED': return 'Cancelada';
      default: return status;
    }
  };

  const handleStatusChange = (reservationId: UUID, newStatus: string) => {
    setReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === reservationId ? { ...reservation, status: newStatus } : reservation
      )
    );
    toast({
      title: 'Status atualizado',
      description: `Reserva ${newStatus} com sucesso.`,
    });
  };

  const handleNewReservation = () => {
    if (
      !newReservation.customerName ||
      !newReservation.phone ||
      !newReservation.date ||
      !newReservation.time ||
      !newReservation.guests
    ) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }


    toast({
      title: 'Reserva criada',
      description: 'Nova reserva adicionada com sucesso.',
    });
  };

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'todas' || reservation.status === statusFilter;
    const matchesDate = !selectedDate || reservation.date === selectedDate;
    return matchesSearch && matchesStatus && matchesDate;
  });



  return (
    <Container>

      <div className="main-content">
        <main className="main">
          <div className="header-section">
            <h1 className="main-title">Reservas</h1>
            <p className="main-description">Gerencie todas as reservas do seu restaurante</p>
          </div>

          <article className="card-container filter-card">
            <header className="card-header">
              <h2 className="card-title">Filtros</h2>
            </header>
            <div className="card-content">
              <div className="filter-group">
                <fieldset className="input-group">
                  <label htmlFor="search" className="label">Buscar por nome ou telefone</label>
                  <div className="search-container">
                    <Search className="icon-search" />
                    <input
                      id="search"
                      placeholder="Digite para buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input search-input"
                    />
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="status-filter" className="label">Status</label>
                  <div className="select-container">
                    <Filter className="icon-filter" />
                    <select
                      id="status-filter"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="select"
                    >
                      <option value="todas">Todas</option>
                      <option value="pendente">Pendente</option>
                      <option value="confirmada">Confirmada</option>
                      <option value="check-in">Check-in</option>
                      <option value="concluida">Concluída</option>
                      <option value="cancelada">Cancelada</option>
                    </select>
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="date-filter" className="label">Data</label>
                  <input
                    id="date-filter"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input"
                  />
                </fieldset>

                <div className="button-group">
                  <button
                    className="new-reservation-button"
                    onClick={() => setIsNewReservationOpen(true)}
                  >
                    <Plus className="icon-plus" />
                    Nova Reserva
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="card-container">
            <header className="card-header">
              <h2 className="card-title">
                Reservas para {new Date(selectedDate).toLocaleDateString('pt-BR')}
              </h2>
              <p className="card-description">{filteredReservations.length} reserva(s) encontrada(s)</p>
            </header>
            <div className="card-content">
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr className="table-header">
                      <th className="table-cell header-cell">Cliente</th>
                      <th className="table-cell header-cell">Contato</th>
                      <th className="table-cell header-cell">Data/Hora</th>
                      <th className="table-cell header-cell">Pessoas</th>
                      <th className="table-cell header-cell">Status</th>
                      <th className="table-cell header-cell">Observações</th>
                      <th className="table-cell header-cell">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.map((reservation) => (
                      <tr key={reservation.id} className="table-row">
                        <td className="table-cell">
                          <div className="customer-name">{reservation.clientName}</div>
                          {reservation.email && (
                            <div className="contact-info">{reservation.email}</div>
                          )}
                        </td>
                        <td className="table-cell">
                          <div className="flex-container">
                            <Phone className="icon-phone" />
                            {reservation.phone}
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="date-time">
                            <div className="flex-container">
                              <Calendar className="icon-calendar" />
                              {new Date(reservation.date).toLocaleDateString('pt-BR')}
                            </div>
                            <div className="flex-container">
                              <Clock className="icon-clock" />
                              {reservation.time}
                            </div>
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="flex-container">
                            <Users className="icon-users" />
                            {reservation.numberOfPeople}
                          </div>
                        </td>
                        <td className="table-cell">
                          <span className={`badge ${getStatusColor(reservation.status)}`}>
                            {getStatusText(reservation.status)}
                          </span>
                        </td>
                        <td className="table-cell">
                          <div className="special-requests">{reservation.specialRequests || '-'}</div>
                        </td>
                        <td className="table-cell">
                          <div className="actions">
                            {reservation.status === 'CONFIRMED' && (
                              <button
                                className="action-button outline"
                                onClick={() => handleStatusChange(reservation.id, 'CHECKIN')}
                              >
                                Check-in
                              </button>
                            )}
                            {reservation.status === 'PENDING' && (
                              <button
                                className="action-button primary"
                                onClick={() => handleStatusChange(reservation.id, 'CONFIRMED')}
                              >
                                Confirmar
                              </button>
                            )}
                            {reservation.status === 'CHECKIN' && (
                              <button
                                className="action-button primary"
                                onClick={() => handleStatusChange(reservation.id, 'COMPLETED')}
                              >
                                Concluir
                              </button>
                            )}
                            {reservation.status !== 'CANCELLED' && reservation.status !== 'COMPLETED' && (
                              <button
                                className="action-button outline"
                                onClick={() => handleStatusChange(reservation.id, 'CANCELLED')}
                              >
                                Cancelar
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredReservations.length === 0 && (
                      <tr>
                        <td colSpan={7} className="table-cell empty-state">
                          <div className="empty-state-content">
                            <Calendar className="icon-empty" />
                            <p className="empty-title">Nenhuma reserva encontrada</p>
                            <p className="empty-description">Não há reservas para os filtros selecionados.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {isNewReservationOpen && (
            <DialogContent>
              <header className="dialog-header">
                <h2 className="dialog-title">Nova Reserva</h2>
                <p className="dialog-description">Adicione uma nova reserva ao sistema</p>
              </header>
              <div className="dialog-content">
                <fieldset className="input-group">
                  <label htmlFor="name" className="label">Nome do Cliente *</label>
                  <input
                    id="name"
                    value={newReservation.customerName}
                    onChange={(e) =>
                      setNewReservation((prev) => ({ ...prev, customerName: e.target.value }))
                    }
                    placeholder="Nome completo"
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="phone" className="label">Telefone *</label>
                  <input
                    id="phone"
                    value={newReservation.phone}
                    onChange={(e) =>
                      setNewReservation((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="(11) 99999-9999"
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={newReservation.email}
                    onChange={(e) =>
                      setNewReservation((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="email@exemplo.com"
                    className="input"
                  />
                </fieldset>
                <div className="grid-container">
                  <fieldset className="input-group">
                    <label htmlFor="date" className="label">Data *</label>
                    <input
                      id="date"
                      type="date"
                      value={newReservation.date}
                      onChange={(e) =>
                        setNewReservation((prev) => ({ ...prev, date: e.target.value }))
                      }
                      className="input"
                    />
                  </fieldset>
                  <fieldset className="input-group">
                    <label htmlFor="time" className="label">Horário *</label>
                    <input
                      id="time"
                      type="time"
                      value={newReservation.time}
                      onChange={(e) =>
                        setNewReservation((prev) => ({ ...prev, time: e.target.value }))
                      }
                      className="input"
                    />
                  </fieldset>
                </div>
                <fieldset className="input-group">
                  <label htmlFor="guests" className="label">Número de Pessoas *</label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    value={newReservation.guests}
                    onChange={(e) =>
                      setNewReservation((prev) => ({ ...prev, guests: e.target.value }))
                    }
                    placeholder="2"
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="requests" className="label">Observações</label>
                  <textarea
                    id="requests"
                    value={newReservation.specialRequests}
                    onChange={(e) =>
                      setNewReservation((prev) => ({ ...prev, specialRequests: e.target.value }))
                    }
                    placeholder="Solicitações especiais..."
                    className="textarea"
                  />
                </fieldset>
              </div>
              <footer className="dialog-footer">
                <button
                  className="cancel-button"
                  onClick={() => setIsNewReservationOpen(false)}
                >
                  Cancelar
                </button>
                <button className="submit-button" onClick={handleNewReservation}>
                  Criar Reserva
                </button>
              </footer>
            </DialogContent>
          )}
        </main>
      </div>
    </Container>
  );
};

export default DashboardReservas;