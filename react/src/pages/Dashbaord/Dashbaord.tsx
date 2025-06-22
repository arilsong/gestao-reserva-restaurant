import React, { useEffect, useState } from 'react';
import { Home, Users, BarChart3, Settings, Star, Edit } from 'lucide-react';
import { Container } from './style';
import EditProfileOverlay from '@/components/dashboard/EditProfile/EditProfile';
import MainDashBoard from '../../components/dashboard/MainDashBoard/MainDashBoard';
import DashboardReservas from '../../components/dashboard/DashboardReservas/DashboardReservas';
import DashboardMesas from '../../components/dashboard/DashboardMesas/DashboardMesas';
import AvaliacoesDashboard from '../../components/dashboard/AvaliacoesDashboard/AvaliacoesDashboard';
import axios from 'axios';
import { UUID } from 'crypto';
import { RESTAURANT_ENDPOINTS } from '@/service/api/endpoints';
import api from '@/service/api/api';


interface RestaurantInfo {
  id: UUID;
  name: string;
  cuisine: string;
  rating: number;
  totalReviews: number;
}

interface RestaurantSidebarProps {
  restaurantInfo: RestaurantInfo;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  onEditProfile: () => void;
  onLogout: () => void;
}


export default function Dashbaord() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<RestaurantInfo>();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get(RESTAURANT_ENDPOINTS.GETRE);
        const r = response.data;

       console.log(response)
        setRestaurant(restaurant);
       
        
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  },[]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'reservas', label: 'Reservas', icon: Users },
    { id: 'mesas', label: 'Mesas', icon: BarChart3 },
    { id: 'avaliacao', label: 'Avaliações', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <MainDashBoard />;
      case 'reservas':
        return <DashboardReservas />;
      case 'mesas':
        return <DashboardMesas />;
      case 'avaliacao':
        return <AvaliacoesDashboard />;
      default:
        return <MainDashBoard />;
    }
  };

  return (
    <Container>
         {/* Sidebar fixo */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="cuisine">ITALIANA</p>
            <div className="rating-container">
              <Star className="icon-star" />
              <span className="rating">5</span>
              <span className="reviews">(4334)</span>
            </div>
        </div>

        <nav className="sidebar-nav">
           {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-button ${
                  activeSection === item.id
                    ? 'active'
                    : ''
                }`}
              >
                <Icon className="nav-icon" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">
            <button className="action-button outline" onClick={() => setIsEditingProfile(true)}>
              <Edit className="icon-edit" />
              Editar Perfil
            </button>
            <button className="action-button outline" /* onClick={onLogout} */>
              Sair
            </button>
          </div>
      </div>

      {/* Conteúdo principal */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <h1 className="header-title">Dashboard</h1>
            <div className="user-avatar">
              <span>U</span>
            </div>
          </div>
        </header>

        {/* Área de conteúdo */}
        <main className="content-area">
           {renderContent()}
        </main>
      </div>
      <EditProfileOverlay isOpen={isEditingProfile} onClose={() => setIsEditingProfile(false)} />
    </Container>
  );
}