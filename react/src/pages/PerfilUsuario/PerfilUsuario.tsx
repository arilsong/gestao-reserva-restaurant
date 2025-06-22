import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Star, ArrowLeft, Edit, Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';
import MinhasReservasOverlay from '@/components/MinhasReservasOverlay/MinhasReservasOverlay';
import { useAuth } from '@/context/AuthContext';
import api from '@/service/api/api';

interface UserData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
}

interface Reservation {
  id: number;
  restaurant: string;
  date: string;
  status: string;
  rating: number;
}

const PerfilUsuario: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [showReservationsOverlay, setShowReservationsOverlay] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    birthDate: '1990-05-15',
    address: 'Rua das Flores, 123 - São Paulo, SP',
  });
  const [editData, setEditData] = useState<UserData>(userData);


  const recentReservations: Reservation[] = [
    {
      id: 1,
      restaurant: 'Bella Vista',
      date: '2024-01-15',
      status: 'concluida',
      rating: 5,
    },
    {
      id: 2,
      restaurant: 'Sushi Zen',
      date: '2024-01-10',
      status: 'concluida',
      rating: 4,
    },
    {
      id: 3,
      restaurant: 'O Tasquinha',
      date: '2024-01-05',
      status: 'concluida',
      rating: 5,
    },
  ];

/*    useEffect(() => {
    u    
   }) */

  const handleSave = async () => {
    setUserData(editData);
    setIsEditing(false);
    
     /* try {
      const response = await api.post(BOOKING_ENDPOINTS.CREATE(restaurantId), dataToSend)
      console.log(response)

    } catch (error) {
      console.log(error)
    } */

    toast({
      title: 'Perfil atualizado',
      description: 'Suas informações foram salvas com sucesso.',
    });
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <header className="header-section">
        <div className="header-content">
          <button className="back-link" onClick={() => navigate('/')}>
            <ArrowLeft className="icon-arrow" />
            Voltar
          </button>
          <div className="header-actions">
            <h1 className="header-title">Meu Perfil</h1>
            {!isEditing ? (
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                <Edit className="icon-action" />
                Editar Perfil
              </button>
            ) : (
              <div className="action-group">
                <button className="cancel-button" onClick={handleCancel}>
                  <X className="icon-action" />
                  Cancelar
                </button>
                <button className="save-button" onClick={handleSave}>
                  <Save className="icon-action" />
                  Salvar
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="main-section">
        <div className="profile-grid">
          <div className="profile-info">
            <article className="card-container">
              <header className="card-header">
                <h2 className="card-title">
                  <User className="icon-title" />
                  Informações Pessoais
                </h2>
              </header>
              <section className="card-content">
                <div className="input-grid">
                  <fieldset className="input-group">
                    <label htmlFor="name" className="label">Nome Completo</label>
                    {isEditing ? (
                      <div className="input-wrapper">
                        <User className="icon-input" />
                        <input
                          id="name"
                          name="name"
                          value={editData.name}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                    ) : (
                      <div className="data-display">{userData.name}</div>
                    )}
                  </fieldset>
                  <fieldset className="input-group">
                    <label htmlFor="email" className="label">E-mail</label>
                    {isEditing ? (
                      <div className="input-wrapper">
                        <Mail className="icon-input" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={editData.email}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                    ) : (
                      <div className="data-display">{userData.email}</div>
                    )}
                  </fieldset>
                  <fieldset className="input-group">
                    <label htmlFor="phone" className="label">Telefone</label>
                    {isEditing ? (
                      <div className="input-wrapper">
                        <Phone className="icon-input" />
                        <input
                          id="phone"
                          name="phone"
                          value={editData.phone}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                    ) : (
                      <div className="data-display">{userData.phone}</div>
                    )}
                  </fieldset>

                  <fieldset className="input-group full-width">
                    <label htmlFor="address" className="label">Endereço</label>
                    {isEditing ? (
                      <div className="input-wrapper">
                        <MapPin className="icon-input" />
                        <input
                          id="address"
                          name="address"
                          value={editData.address}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                    ) : (
                      <div className="data-display">{userData.address}</div>
                    )}
                  </fieldset>
                </div>
              </section>
            </article>

            <article className="card-container">
              <header className="card-header">
                <div className="card-header-content">
                  <h2 className="card-title">
                    <Calendar className="icon-title" />
                    Reservas Recentes
                  </h2>
                  <button
                    className="action-link"
                     onClick={() => setShowReservationsOverlay(true)}
                  >
                    Ver Todas
                  </button>
                </div>
              </header>
              <section className="card-content">
                <div className="reservations-list">
                  {recentReservations.map((reservation) => (
                    <div key={reservation.id} className="reservation-item">
                      <div>
                        <h4 className="reservation-title">{reservation.restaurant}</h4>
                        <p className="reservation-date">
                          {new Date(reservation.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <div className="reservation-meta">
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`icon-star ${i < reservation.rating ? 'rated' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="reservation-status">Concluída</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>

          <div className="stats-sidebar">
            <article className="card-container">
              <header className="card-header">
                <h2 className="card-title">Ações Rápidas</h2>
              </header>
              <section className="card-content">
                <div className="actions-list">
                  <button
                    className="action-button"
                    onClick={() => setShowReservationsOverlay(true)}
                  >
                    <Calendar className="icon-action" />
                    Minhas Reservas
                  </button>
                  <button
                    className="action-button"
                    onClick={() => navigate('/')}
                  >
                    <Star className="icon-action" />
                    Encontrar Restaurantes
                  </button>
                  <button className="action-button">
                    <MapPin className="icon-action" />
                    Restaurantes Próximos
                  </button>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <MinhasReservasOverlay
        isOpen={showReservationsOverlay}
        onClose={() => setShowReservationsOverlay(false)}
      />
    </Container>
  );
};

export default PerfilUsuario;